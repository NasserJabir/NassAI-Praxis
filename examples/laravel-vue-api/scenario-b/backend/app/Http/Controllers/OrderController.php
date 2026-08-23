<?php

namespace App\Http\Controllers;

use App\Repositories\OrderRepository;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    public function __construct(private readonly OrderRepository $orders) {}
    public function index(): JsonResponse { return response()->json(['data' => $this->orders->forUser(auth('api')->user())]); }
    public function store(): JsonResponse { return response()->json(['message' => 'Order creation uses the validated order service']); }
    public function show(int $order): JsonResponse { return response()->json(['data' => ['id' => $order]]); }
    public function adminIndex(): JsonResponse { return response()->json(['data' => $this->orders->all()]); }
}
