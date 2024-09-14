<?php

namespace App\Http\Controllers\Admin\Articles;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class EditArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Article $article)
    {
        $articleWithTranslations = $article->load('translations');
        $categories = Category::all();
        $translations = [];
        foreach ($articleWithTranslations->translations as $translation) {
            $locale = $translation->locale;
            // Remplir les données seulement si la locale existe dans l'article
            if ($locale) {
             
                $translations[$locale] = [
                    'title' => $translation->title ?? null,
                    'slug' => $translation->slug ?? null,  
                    'content' => $translation->content ?? null,  
                    'description' => $translation->description ?? null,
                ];
            }
        }
        return inertia('Admin/Articles/Edit', [
            'article' => $articleWithTranslations,
            'translations' => $translations,
            'categories' => $categories,
        ]);
    }
}
