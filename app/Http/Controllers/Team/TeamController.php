<?php

namespace App\Http\Controllers\Team;

use App\Http\Controllers\Controller;
use App\Models\Project\Project;
use App\Models\Project\ProjectUser;
use App\Models\User\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function PHPUnit\Framework\isEmpty;

class TeamController extends Controller
{
    // Route ('/')
    public function index() {
        // Team and project filter by auth user id
        $auth = Auth::user();

        $teams = $auth->teams()->select(['teams.id', 'teams.name'])->get();

        $projects = $auth->projects()
            ->with(['members' => fn($query) => $query->select('users.name', 'project_users.project_id')])
            ->select(['projects.id', 'projects.name', 'projects.status', 'projects.team_id', 'projects.description', 'projects.end_date'])
            ->get();

        return Inertia::render('Team/Index', [
            'projects' => $projects,
            'teams' => $teams,
            ]);
 
    }

    // Web Route('/overview')
    public function overview($id) {
        $user = Auth::user();
        $team = $user->teams()
            ->where('teams.id', $id)
            ->get(['teams.id', 'teams.name']);
        
        return response()->json(["team_overview" => $team]);
    }

    // Web Route('/store')
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
