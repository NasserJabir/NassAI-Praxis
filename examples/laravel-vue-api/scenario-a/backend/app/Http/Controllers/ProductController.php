<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(): mixed { return Product::query()->get(); }
    public function store(Request $request): mixed { return Product::query()->create($request->all()); }
}
