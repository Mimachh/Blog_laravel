<?php

namespace App\Http\Controllers\Admin\Articles;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Articles\StoreArticleRequest;
use App\Models\Article;
use Illuminate\Http\Request;

class StoreArticleController extends Controller
{
    public function __invoke(StoreArticleRequest $request)
    {
        $data = $request->validated();
       
        $user = auth()->user();
        $article = new Article();
        $article->category_id = $data['category_id'];
        $article->user_id = $user->id;
        $translations = $data['translations'];
        $article->fill($translations);
        $article->save();
    }
}
