<?php

declare(strict_types=1);
namespace Tests\Feature\Article;

use App\Models\ArticleTranslation;
use App\Models\Category;
use App\Models\Role;
use App\Models\User;
use function Pest\Laravel\{actingAs};

use function Pest\Laravel\post;

it('can not create article if not super admin', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    
    $response = actingAs($user)->post(route('articles.store'), [
            'category_id' => $category->id,
            'translations' => [
                'en' => [
                    'title' => 'Title',
                    'content' => 'Content',
                    'slug' => 'title',
                ],
                'fr' => [
                    'title' => 'Titel',
                    'content' => 'Inhalt',
                    'slug' => 'titel',
                ],
            ],
        ])->assertSessionHasNoErrors()
        ->assertStatus(403)
        ;


        $this->assertDatabaseCount('article_translations', 0);

});

it('can create article', function () {
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
    
    $response = actingAs($user)->post(route('articles.store'), [
            'category_id' => $category->id,
            'translations' => [
                'en' => [
                    'title' => 'Title',
                    'content' => 'Content',
                    'slug' => 'title',
                ],
                'fr' => [
                    'title' => 'Titel',
                    'content' => 'Inhalt',
                    'slug' => 'titel',
                ],
            ],
        ])->assertSessionHasNoErrors()
        ->assertStatus(200)
        ;

        $this->assertDatabaseHas('article_translations', [
            'locale' => 'en',
            'title' => 'Title',
            'content' => 'Content',
            'slug' => 'title',
        ]);

        $this->assertDatabaseCount('article_translations', 2);

});

it('can not create article if not auth', function () {

    $category = Category::factory()->create();
    
    $response = post(route('articles.store'), [
            'category_id' => $category->id,
            'translations' => [
                'en' => [
                    'title' => 'Title',
                    'content' => 'Content',
                    'slug' => 'title',
                ],
                'fr' => [
                    'title' => 'Titel',
                    'content' => 'Inhalt',
                    'slug' => 'titel',
                ],
            ],
        ])->assertStatus(302)
        ->assertRedirect(route('login'))
        ;


        $this->assertDatabaseCount('article_translations', 0);

});