<?php

namespace App\Models\Project;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function project() { 
        return $this->belongsTo(Project::class);
    }

    public function assignedUser() {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
