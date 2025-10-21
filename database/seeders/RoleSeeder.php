<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin
        Role::create(['name' => 'Admin']);

        // Project Team Leader
        Role::create(['name' => 'Team Leader']);

        // Frontend Developer
        Role::create(['name' => 'Frontend Developer']);

        //Backend Developer
        Role::create(['name' => 'Backend Developer']);

        // Fullstack Developer
        Role::create(['name' => 'Fullstack Developer']);

        // QA
        Role::create(['name' => 'QA']);

        // Git Manager
        Role::create(['name' => 'Git Manager']);
    }
}
