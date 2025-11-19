<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OverviewController extends Controller
{
    public function index() {
        $user = Auth::user();

        $projects = $user->projects()
            ->get(['projects.id', 'projects.team_id', 'projects.name']);

        return response()->json(['projects' => $projects]);
    }
}
