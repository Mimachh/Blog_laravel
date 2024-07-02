<?php

namespace App\Http\Controllers\Public\Articles;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ShowArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $slug)
    {
        $article = Article::whereHas('translations', function ($query) use ($slug) {
            $query->where('slug', $slug);
        })->first();
        
        return inertia('Public/Articles/Show', [
            'article' => new ArticleResource($article->load('category')),
        ]);
    }
}
