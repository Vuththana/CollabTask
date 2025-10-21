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

        $superAdmin = Role::create(['name' => 'Super Admin']);
        User::factory()->create()->each(function($user) use ($superAdmin) {
            $user->assignRole($superAdmin);
        });

        User::factory()->create()->each(function($user) {
            $user->assignRole('Admin');
        });
    }
}
