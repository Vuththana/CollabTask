<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset Cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        /*
        |--------------------------------------------------------------------------
        | GLOBAL PERMISSIONS (System-wide, no team)
        |--------------------------------------------------------------------------
        */

        $globalPermissions = [
            'global.manage_everything',  // Only for super-admin
            'global.create_team'    // For global-user
        ];

        /*
        |--------------------------------------------------------------------------
        | TEAM PERMISSIONS (Per-team)
        |--------------------------------------------------------------------------
        */

        $teamPermissions = [
            'team.manage_settings',
            'team.manage_members'
        ];

        /*
        |--------------------------------------------------------------------------
        | PROJECT PERMISSIONS (Per-team)
        |--------------------------------------------------------------------------
        */

        $projectPermissions = [
            'project.manage_settings',
            'project.manage_members'
        ];

        /*
        |--------------------------------------------------------------------------
        | TASK PERMISSION (Per-team/task)
        |--------------------------------------------------------------------------
        */

        $taskPermissions = [
            'task.create',
            'task.edit',
            'task.update_status'
        ];

        // Create all permissions
        $allPermissions = array_merge($globalPermissions, $teamPermissions, $projectPermissions, $taskPermissions);

        foreach ($allPermissions as $perm) {
            Permission::firstOrCreate(['name' => $perm]);
        }

        /*
        |--------------------------------------------------------------------------
        | GLOBAL ROLES (not team-based)
        |--------------------------------------------------------------------------
        */

        // SUPER ADMIN - (Full system control)
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdminRole->syncPermissions($allPermissions);

        // GLOBAL USER (normal registered user)
        $globalUser = Role::firstOrCreate(['name' => 'global-user']);
        $globalUser->syncPermissions([
            'global.create_team'
        ]);

        /*
        |--------------------------------------------------------------------------
        | TEAM ROLES
        |--------------------------------------------------------------------------
        */

        // TEAM OWNER
        $teamOwner = Role::firstOrCreate(['name' => 'team-owner']);
        $teamOwner->syncPermissions([
            'team.manage_settings',
            'team.manage_members'
        ]);

        // TEAM MEMBER
        $teamMember = Role::firstOrCreate(['name' => 'team-member']);
        $teamMember->syncPermissions([
            // NO special team permissions, only inherits project perms later
        ]);

        /*
        |--------------------------------------------------------------------------
        | PROJECT ROLES
        |--------------------------------------------------------------------------
        */

        // PROJECT OWNER
        $projectOwner = Role::firstOrCreate(['name' => 'project-owner']);
        $projectOwner->syncPermissions([
            'project.manage_settings',
            'project.manage_members',
            'task.create',
            'task.edit',
            'task.update_status'
        ]);

        // PROJECT MEMBER
        $projectMember = Role::firstOrCreate(['name' => 'project-member']);
        $projectMember->syncPermissions([
            'task.create',
            'task.edit',
            'task.update_status'
        ]);

        // PROJECT GUEST
        $projectGuest = Role::firstOrCreate(['name' => 'project-guest']);
        $projectGuest->syncPermissions([
            'task.update_status'
        ]);
    }
}
