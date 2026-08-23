<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Repositories\ProductRepository;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function __construct(private readonly ProductRepository $products) {}
    public function index(): JsonResponse { return response()->json(['data' => $this->products->paginate()]); }
    public function store(StoreProductRequest $request): JsonResponse { return response()->json(['data' => $this->products->create($request->validated())], 201); }
}
