<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User\Team;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $authId = Auth::id();

        $team = Team::where('owner_id', $authId)->get();

        return Inertia::render('Dashboard/Index',[
            'teams' => $team
        ]);
    }
}
