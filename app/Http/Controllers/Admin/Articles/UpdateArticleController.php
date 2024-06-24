<?php

namespace App\Http\Controllers\Admin\Articles;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Articles\UpdateArticleRequest;
use App\Models\Article;
use Illuminate\Http\Request;

class UpdateArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateArticleRequest $request, Article $article)
    {
        $data = $request->validated();

        $user = auth()->user();
        $article->user_id = $user->id;
        $translations = $data['translations'];
        $article->category_id = $data['category_id'];

        $article->fill($translations);

        $article->save();

    }
}
