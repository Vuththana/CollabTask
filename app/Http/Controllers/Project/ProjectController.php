<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Project\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function store(Request $request, $id) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'status' => 'nullable|in:on_track,at_risk,delayed,completed',
        ]);

        $team = Auth::user()->teams()->findOrFail($id);

        $project = Project::create([
            'name' => $validated['name'],
            'team_id' => $team->id,
            'description' => $validated['description'] ?? null,
            'start_date' => $validated['start_date'] ?? null,
            'end_date' => $validated['end_date'] ?? null,
            'status' => $validated['status'] ?? 'on_track',
        ]);

        $project->members()->attach(Auth::id(), ['role' => 'project-owner']);

        return redirect()->back()->with('created_project', $project->only(['id']));
    }
}
