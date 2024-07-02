<?php

namespace App\Http\Controllers;

use App\Enums\Locales;
use App\Http\Requests\ChangeLocaleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;

class LocaleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ChangeLocaleRequest $request)
    {
       $data = $request->validated();

       if($data) {
        session(['locale' => $data['locale']]);
        return redirect()->back(303);
       }

    }
}
