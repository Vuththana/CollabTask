<?php

namespace App\Models\User;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class InviteLink extends Model
{
    protected $fillable = [
        'team_id', 'created_by', 'token', 'role', 'expires_at', 'max_uses', 'uses', 'status'
    ];

    public function team() {
        return $this->belongsTo(Team::class);
    }

    public function createdBy() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function isExpired() {
        return $this->expires_at && now()->greaterThan($this->expires_at);
    }

    public function canBeUsed() {
        return $this->status === 'active' && (!$this->max_uses || $this->uses < $this->max_uses) && !$this->isExpired();
    }
}
