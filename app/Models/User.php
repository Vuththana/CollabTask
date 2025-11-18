<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Project\Project;
use App\Models\Project\ProjectInvitation;
use App\Models\User\Team;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, HasPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function teams()
    {
        return $this->belongsToMany(Team::class, 'team_users')
            ->withPivot('role')
            ->withTimestamps();
    }

    public function ownedTeam() {
        return $this->hasMany(Team::class, 'owner_id');
    }
    
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_users');
    }

    public function projectUsers()
    {
        return $this->hasMany(ProjectUser::class, 'project_users');
    }

    public function invitationsSent()
    {
        return $this->hasMany(ProjectInvitation::class);
    }
    
    public function invitationsReceived()
    {
        return $this->hasMany(ProjectInvitation::class);
    }
}
