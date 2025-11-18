<?php

namespace App\Http\Controllers\Team;

use App\Http\Controllers\Controller;
use App\Models\Project\ProjectInvitation;
use App\Models\User\Team;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

use function PHPUnit\Framework\isEmpty;

class TeamController extends Controller
{
    public function index() {
        // Team and project filter by auth user id
        $auth = Auth::user();

        $teams = $auth->teams()->get(['teams.id', 'teams.name']);

        $projects = $auth->projects()
            ->get(['projects.id', 'projects.name', 'projects.team_id']);

        // $members = $auth->

        // $acceptedInvitations = ProjectInvitation::with(['sender', 'recipient'])
        //     ->whereIn('project_id', $projectId)
        //     ->where('status', 'accepted')
        //     ->get();

        $roles = Role::all('name');

        $permissions = Permission::all('name');

        return Inertia::render('Team/Index', [
            'projects' => $projects,
            'roles' => $roles,
            'permissions' => $permissions,
            'teams' => $teams
            // 'invited_by' => $acceptedInvitations->map(fn($invite) => [
            //     'project_id' => $invite->project_id,
            //     'recipient_name' => $invite->recipient->name,
            //     'invited_by' => $invite->sender->name ? $invite->sender->name :  "System",
            // ])
            ]);
        // return response()->json($invitedBy); 
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|nullable'
        ]);

        $team = Team::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'owner_id' => Auth::id(),
        ]);

        $team->members()->attach(Auth::id(), ['role' => 'team-owner']);

        return redirect(route('teams.index', absolute: false));
    }
}
