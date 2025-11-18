<?php

use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Team\TeamController;
use App\Http\Controllers\User\InviteLinkController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
    // SPA home (Teams dashboard)
    Route::get('/', [TeamController::class, 'index'])->name('teams.index');

    // Team routes (backend API)
    Route::prefix('teams')->group(function () {
        // create new team
        Route::post('/', [TeamController::class, 'store'])->name('teams.store');

        // generate invite link
        Route::post('/{team}/invite-link', [InviteLinkController::class, 'create'])
            ->name('teams.invite-link.create');
    });

    

    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects/{id}', [ProjectController::class, 'store'])->name('project.store');
});

Route::get('/invite/{token}', [InviteLinkController::class, 'accept'])->name('teams.invite-link.accept');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
