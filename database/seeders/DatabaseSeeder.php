<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Call Seeder
        $this->call([
            RoleSeeder::class,
        ]);

        User::factory(1)->create()->each(function($user)  {
            $user->assignRole('super-admin');
        });

        User::factory(1)->create()->each(function($user) {
            $user->assignRole('global-user');
        });
    }
}
