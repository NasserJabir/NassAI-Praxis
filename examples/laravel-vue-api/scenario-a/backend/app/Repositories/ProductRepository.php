<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{
    public function listProducts(): mixed { return Product::all(); }
}
