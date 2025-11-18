<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Project\Project;
use App\Models\User\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function store(Request $request, $id) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $auth = Auth::user();

        $project = Project::create([
            'name' => $validated['name'],
            'team_id' => $id,
        ]);

        $project->members()->attach(Auth::id(), ['role' => 'project-owner']);

        return redirect(route('teams.index', absolute: false));
    }
}
