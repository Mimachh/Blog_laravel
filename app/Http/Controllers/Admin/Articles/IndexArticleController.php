<?php

namespace App\Http\Controllers\Admin\Articles;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

class IndexArticleController extends Controller
{
    public function __invoke()
    {
        // app()->setLocale("fr");
        $articles = ArticleResource::collection(Article::all());
        return inertia('Admin/Articles/Index', [
            'articles' => $articles,
            'can' => [
                'edit' => auth()->user()->can('update', Article::class),
            ]
        ]);
    }
}
