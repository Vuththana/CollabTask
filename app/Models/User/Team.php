<?php

namespace App\Models\User;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'description',
        'owner_id',
    ];

    public function owner() {
        return $this->belongsTo(User::class, 'owner_id');
    }
    
    public function members()
    {
        return $this->belongsToMany(User::class, 'team_users');
    }

}
