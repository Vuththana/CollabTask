<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class TeamUser extends Model
{
    protected $table = 'team_users';

    protected $fillable = [
        'team_id',
        'user_id',
        'role',
    ];
}
