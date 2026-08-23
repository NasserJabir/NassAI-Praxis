<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    public function paginate(int $perPage = 20) { return Category::query()->withCount('products')->latest()->paginate($perPage); }
    public function create(array $attributes): Category { return Category::query()->create($attributes); }
    public function update(Category $category, array $attributes): Category { $category->update($attributes); return $category->refresh(); }
}
