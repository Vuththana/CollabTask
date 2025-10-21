<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Models\User;
use Dom\Text;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('User Details')
                    ->columns(1)
                    ->schema([

                        // Name Input
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('Enter name...')
                            ->columns(2)
                            ->columnSpanFull(),

                        // Email Input
                        TextInput::make('email')
                            ->required()
                            ->placeholder('email@domain.com')
                            ->unique(
                                table: User::class,
                                column: 'email',
                                ignoreRecord: true,
                            )
                            ->columns(2)
                            ->columnSpanFull(),

                        TextInput::make('password')
                                ->required(),
                    ]),
            ]);
    }
}
