<?php

use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Public\Articles\ShowArticleController;
use App\Http\Controllers\Public\Articles\IndexArticleController as PublicIndexArticleController;


Route::name('fo.')->group(function () {

    Route::prefix('articles')->name('articles.')->group(function () {
        Route::get('/', PublicIndexArticleController::class)->name('index');
        Route::get('/{slug}', ShowArticleController::class)->name('show');
    });
    
    Route::post('/change-locale', LocaleController::class)->name('change-locale');
});
