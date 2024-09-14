<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Articles\CreateArticleController;
use App\Http\Controllers\Admin\Articles\EditArticleController;
use App\Http\Controllers\Admin\Articles\IndexArticleController;
use App\Http\Controllers\Admin\Articles\StoreArticleController;
use App\Http\Controllers\Admin\Articles\UpdateArticleController;
use Inertia\Inertia;

Route::prefix('bo')->name('bo.')->middleware(['auth', 'checkRole:super_admin'])->group(function () {
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
    
    Route::prefix('admin/articles')->name('articles.')->group(function () {
        Route::get('/', IndexArticleController::class)->name('index');
        Route::get('/create', CreateArticleController::class)->name('create');
        Route::post('/', StoreArticleController::class)->name('store');
        Route::put('/{article}', UpdateArticleController::class)->name('update');
        Route::get('/{article}/edit', EditArticleController::class)->name('edit');
    });
});