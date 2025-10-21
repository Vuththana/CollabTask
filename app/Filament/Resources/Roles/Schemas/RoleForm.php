<?php

namespace App\Filament\Resources\Roles\Schemas;

use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Spatie\Permission\Models\Role;

class RoleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Role Details')
                    ->columns(1)
                    ->schema([

                        // Name Input
                        TextInput::make('name')
                            ->label('Role Name')
                            ->required()
                            ->maxLength(20)
                            ->placeholder('Enter role name...')
                            ->unique(
                                table: Role::class,
                                column: 'name',
                                ignoreRecord: true,
                            ),
                    ]),
            ]);
    }
}
