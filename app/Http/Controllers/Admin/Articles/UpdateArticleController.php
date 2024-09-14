<?php

namespace App\Http\Controllers\Admin\Articles;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Articles\UpdateArticleRequest;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class UpdateArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateArticleRequest $request, Article $article)
    {
        Gate::authorize('update', $article);
        $data = $request->validated();

        $user = auth()->user();
        $article->user_id = $user->id;

        $translations = $data['translations'];
        $article->category_id = $data['category_id'];
        $article->isActive = $data['isActive'];
        $article->fill($translations);

        $article->save();

    }
}
