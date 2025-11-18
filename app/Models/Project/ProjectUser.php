<?php

namespace App\Models;

use App\Models\Project\Project;
use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
