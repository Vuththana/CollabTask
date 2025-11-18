<?php

namespace App\Notifications\User;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class TeamInvitationNotification extends Notification
{
    use Queueable;

    protected $team;
    protected $invitation;
    protected $role;
    /**
     * Create a new notification instance.
     */
    public function __construct($team, $invitation, $role)
    {
        $this->team = $team;
        $this->invitation = $invitation;
        $this->role = $role;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $acceptUrl = route('global.invitations.accept', $this->invitation->token);

        return (new MailMessage)
            ->greeting('Dear ' . $notifiable->name . ',')
            ->line("You have been invited to join our team as **{$this->role}**.")
            ->line("Invitation sent by: " . Auth::user()->name)
            ->action('Accept Invitation', $acceptUrl)
            ->line('If you did not expect this invitation, you can ignore this email.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
