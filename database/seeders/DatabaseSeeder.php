<?php

namespace Database\Seeders;

use App\Models\Category;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Mimachh\Guardians\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

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
