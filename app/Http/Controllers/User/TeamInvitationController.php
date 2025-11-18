<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\User\TeamInvitation;
use App\Notifications\User\TeamInvitationNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TeamInvitationController extends Controller
{
    public function store(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email'
        ]);

        $recipient = User::where('email', $request->email)->first();

        $role = $request->role;

        $invitation = TeamInvitation::create([
            'sender_id' => auth()->id(),
            'recipient_id' => $recipient->id,
            'recipient_email' => $request->email,
            'token' => Str::uuid(),
            'role' => $role,
        ]);

        $recipient->notify(new TeamInvitationNotification($team,$invitation, $role));

        return back()->with('success', 'Invitation sent successfully');
    }

    public function accept($token) {
        $invitation = TeamInvitation::where('token', $token)->firstOrFail();

        // Only allow the intended recipient
        if($invitation->recipient_id !== auth()->id()) {
            abort(403, 'This invitation is not for you.');
        }

        $invitation->update(['status' => 'accepted']);

        $user = auth()->user();
        $user->assignRole($invitation->role);
    }
}