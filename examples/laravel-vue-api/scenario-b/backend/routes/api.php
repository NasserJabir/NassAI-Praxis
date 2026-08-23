<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::middleware('auth:api')->group(function (): void {
        Route::post('/auth/refresh', [AuthController::class, 'refresh']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        Route::get('/products', [ProductController::class, 'index']);
        Route::post('/products', [ProductController::class, 'store']);
        Route::apiResource('orders', OrderController::class)->only(['index', 'store', 'show']);
        Route::middleware('role:admin')->group(function (): void {
            Route::get('/users', [UserController::class, 'index']);
            Route::apiResource('categories', CategoryController::class);
            Route::get('/admin/orders', [OrderController::class, 'adminIndex']);
        });
    });
});
