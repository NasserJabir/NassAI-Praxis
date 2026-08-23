<?php

namespace App\Repositories;

use App\Models\Order;
use App\Models\User;

class OrderRepository
{
    public function forUser(User $user) { return Order::query()->where('user_id', $user->id)->with('items')->latest()->paginate(); }
    public function all() { return Order::query()->with(['user', 'items'])->latest()->paginate(); }
}
