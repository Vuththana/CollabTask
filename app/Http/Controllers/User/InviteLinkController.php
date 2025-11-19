<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\InviteLink;
use App\Models\User\Team;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class InviteLinkController extends Controller
{
    public function create(Team $team) {
        $invite = InviteLink::where( 'created_by', Auth::id())
        ->where('status', 'active')
        ->latest()
        ->first();

        if(!$invite) {
            $invite = InviteLink::create([
                'team_id' => $team->id,
                'created_by' => Auth::id(),
                'token' => Str::uuid(),
                'role' => 'team-member',
                'expires_at' => now()->addDays(7)
            ]);
        }

        $url = url("/invite/{$invite->token}");

            return response()->json(['invite_link' => $url]);
    }

    public function accept($token) {
        $invite = InviteLink::where('token', $token)->first();
        if(!Auth::check()) {
            session(['invite_token' => $token]);
            return redirect()->route('register');
        }

        $user = Auth::user();
        $team = $invite->team;

        $team->members()->syncWithoutDetaching([$user->id => ['role' => $invite->role]]);

        $invite->increment('uses');

        return redirect()->route('teams.index', $team->id)
            ->with('success', 'You have joined the team');
    }
}
