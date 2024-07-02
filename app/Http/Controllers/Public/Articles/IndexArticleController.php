<?php

namespace App\Http\Controllers\Public\Articles;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class IndexArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $articles = ArticleResource::collection(Article::all());

        $articles = Article::whereHas('translations', function ($query) {
            $query->where('article_translations.locale', app()->getLocale())
            ->whereNotNull('article_translations.slug')
            // ->whereNotNull('article_translations.title')
            // ->whereNotNull('article_translations.content')
            // ->whereNotNull('article_translations.description') 
            ;
        })->get();

        return inertia('Public/Articles/Index', [
            'articles' => ArticleResource::collection($articles->load('category')),
        ]);
    }
}
