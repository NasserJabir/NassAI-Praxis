<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function paginate(int $perPage = 20) { return User::query()->latest()->paginate($perPage); }
    public function create(array $attributes): User { return User::query()->create($attributes); }
}
