<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function tasks() {
        return $this->hasMany(Task::class);
    }
}
