<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create(['name' => 'Admin', 'email' => 'admin@example.test', 'password' => Hash::make('password'), 'role' => 'admin']);
        User::factory()->create(['name' => 'User', 'email' => 'user@example.test', 'password' => Hash::make('password'), 'role' => 'user']);
    }
}
