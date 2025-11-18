<?php

namespace App\Models\Project;


use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectInvitation extends Model
{
    use HasFactory;
    protected $fillable = [
        'recipient_email',
        'recipient_id',
        'project_id',
        'sender_id',
        'token',
        'status',
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function recipient()
    {
        return $this->belongsTo(User::class, 'recipient_id');
    }
    
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
