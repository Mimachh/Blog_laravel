<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

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

        Category::factory()->create([
            "name" => "Laravel",
            "slug" => "laravel",
        ]);
    }
}
