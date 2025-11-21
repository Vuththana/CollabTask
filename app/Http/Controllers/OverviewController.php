<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class OverviewController extends Controller
{
    public function index() {
        $user = Auth::user();

        $projects = $user->projects()
            ->select()
            ->get();

        return response()->json(['projects' => $projects]);
    }
}
