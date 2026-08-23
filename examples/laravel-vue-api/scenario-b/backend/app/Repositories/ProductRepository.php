<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{
    public function paginate(int $perPage = 20) { return Product::query()->with('category')->latest()->paginate($perPage); }
    public function create(array $attributes): Product { return Product::query()->create($attributes); }
}
