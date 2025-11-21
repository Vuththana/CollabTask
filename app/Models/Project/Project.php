<?php

namespace App\Models\Project;

use App\Models\User;
use App\Models\User\Team;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'team_id',
        'name',
        'description',
        'start_date',
        'end_date',
        'status',
    ];

    public function teams() {
        return $this->hasMany(Team::class);
    }
    public function tasks() {
        return $this->hasMany(Task::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function members()
    {
        return $this->belongsToMany(User::class, 'project_users');
    }

    public function invitations()
    {
        return $this->hasMany(ProjectInvitation::class);
    }

    public function projectUsers()
    {
        return $this->hasMany(ProjectUser::class, 'project_users');
    }

    public function acceptedMembers()
{
    return $this->hasManyThrough(User::class, ProjectInvitation::class, 'project_id', 'id', 'id', 'recipient_id')
        ->where('project_invitations.status', 'accepted');
}
}
