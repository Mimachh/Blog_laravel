<?php

declare(strict_types=1);

namespace Tests\Feature\Article;

use App\Models\Article;
use App\Models\ArticleTranslation;
use App\Models\Category;
use App\Models\User;
use Database\Factories\RoleFactory;
use Mimachh\Guardians\Database\Factories\RoleFactory as FactoriesRoleFactory;
use Mimachh\Guardians\Models\Role;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

it('can not update article if not super admin', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    $article = Article::factory([
        'category_id' => $category->id,
        'title' => 'Title',
        'content' => 'Content',
        'slug' => 'title',
        "user_id" => $user->id,
    ])->create();


    $response = actingAs($user)->put(route('bo.articles.update', $article->id), [
        'category_id' => $category->id,
        'translations' => [
            'en' => [
                'title' => 'Title Update',
                'content' => 'Content Update',
                'slug' => 'title Update',
            ],
            'fr' => [
                'title' => 'Titel Update',
                'content' => 'Inhalt Update',
                'slug' => 'titel Update',
            ],
        ],
    ])->assertSessionHasNoErrors()
        ->assertStatus(403);


    $this->assertDatabaseCount('article_translations', 1);
    $this->assertDatabaseHas('article_translations', [
        'locale' => 'fr',
        'title' => 'Title',
        'content' => 'Content',
        'slug' => 'title',
    ]);
});

it('can update article', function () {
    Role::factory(3)->sequence(
        [
            'name' => 'Super Admin',
            'slug' => 'super_admin'
        ],
        [
            'name' => 'Admin',
            'slug' => 'admin'
        ],
        [
            'name' => 'User',
            'slug' => 'user'
        ]
    )->create();

    $user = User::factory()->create(
        [
            'name' => 'Mimach',
            'email' => 'mimach.dev@gmail.com',
            'password' => bcrypt('password'),
        ]
    );

    $superAdminRole = Role::where('slug', 'super_admin')->first();

    if ($superAdminRole) {
        $user->roles()->attach($superAdminRole->id);
    }

    $category = Category::factory()->create();

    $article = Article::factory([
        'category_id' => $category->id,
        'title' => 'Title',
        'content' => 'Content',
        'slug' => 'title',
        "user_id" => $user->id,
    ])->create();


    $response = actingAs($user)->put(route('bo.articles.update', $article->id), [
        'category_id' => $category->id,
        'translations' => [
            'en' => [
                'title' => 'Title Update',
                'content' => 'Content Update',
                'slug' => 'title Update',
            ],
            'fr' => [
                'title' => 'Titel Update',
                'content' => 'Inhalt Update',
                'slug' => 'titel Update',
            ],
        ],
    ])->assertSessionHasNoErrors()
        ->assertStatus(200);

    $this->assertDatabaseHas('article_translations', [
        'locale' => 'fr',

        'title' => 'Titel Update',
        'content' => 'Inhalt Update',
        'slug' => 'titel Update',

    ]);
});

it('can not update article if not auth', function () {

    $category = Category::factory()->create();

    $user = User::factory()->create();
    $article = Article::factory([
        'category_id' => $category->id,
        'title' => 'Title',
        'content' => 'Content',
        'slug' => 'title',
        "user_id" => $user->id,
    ])->create();


    $response = put(route('bo.articles.update', $article->id), [
        'category_id' => $category->id,
        'translations' => [
            'en' => [
                'title' => 'Title Update',
                'content' => 'Content Update',
                'slug' => 'title Update',
            ],
            'fr' => [
                'title' => 'Titel Update',
                'content' => 'Inhalt Update',
                'slug' => 'titel Update',
            ],
        ],
    ])->assertStatus(302)
    ->assertRedirect(route('login'));



    $this->assertDatabaseHas('article_translations', [
        'locale' => 'fr',
        'title' => 'Title',
        'content' => 'Content',
        'slug' => 'title',
    ]);
});
