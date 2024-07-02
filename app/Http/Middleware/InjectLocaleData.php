<?php

namespace App\Http\Middleware;

use App\Services\BrowserLanguageService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class InjectLocaleData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
         // Check if the language is set in the session
         $languageCode = session('locale', null);

         if (!$languageCode) {
             // Detect language if not set in session
             $browserLanguageService = new BrowserLanguageService();
             $languageCode = $browserLanguageService->detectLanguage($request);
 
             // Store the detected language in session
             session(['locale' => $languageCode]);
         } 

         // Specify the path to the language JSON files
         $localesPath = base_path('app/locales');
         $languageFilePath = "{$localesPath}/{$languageCode}.json";
 
         if (file_exists($languageFilePath)) {
             $data = json_decode(file_get_contents($languageFilePath), true);
         } else {
             // Fallback to English if the language file does not exist
             $englishFilePath = "{$localesPath}/en.json";
             $data = json_decode(file_get_contents($englishFilePath), true);
             $languageCode = 'en';
         }
 

         // Inject data into Inertia
         inertia()->share('localeData', [
             'data' => $data,
             'languageCode' => $languageCode,
         ]);
 
         $locale = session('locale', config('app.locale'));
         // Set the locale for the application
         App::setLocale($locale);
         
         return $next($request);
    }
}
