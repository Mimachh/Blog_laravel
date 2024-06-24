<?php

use App\Http\Controllers\Admin\Articles\CreateArticleController;
use App\Http\Controllers\Admin\Articles\IndexArticleController;
use App\Http\Controllers\Admin\Articles\StoreArticleController;
use App\Http\Controllers\Admin\Articles\UpdateArticleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'super.admin'])->prefix('articles')->name('articles.')->group(function () {
    Route::get('/', IndexArticleController::class)->name('index');
    Route::get('/create', CreateArticleController::class)->name('create');
    Route::post('/', StoreArticleController::class)->name('store');
    Route::put('/{artice}', UpdateArticleController::class)->name('update');
});

require __DIR__.'/auth.php';
