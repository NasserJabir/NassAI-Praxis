<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct(private readonly UserRepository $users) {}
    public function register(RegisterRequest $request): JsonResponse { $user = $this->users->create(['name' => $request->string('name'), 'email' => $request->string('email'), 'password' => Hash::make($request->string('password')), 'role' => 'user']); return response()->json(['data' => ['user' => $user], 'token' => JWTAuth::fromUser($user)], 201); }
    public function login(LoginRequest $request): JsonResponse { if (! $token = auth('api')->attempt($request->validated())) { return response()->json(['message' => 'Invalid credentials'], 401); } return response()->json(['data' => ['token' => $token, 'type' => 'bearer', 'expires_in' => auth('api')->factory()->getTTL() * 60]]); }
    public function refresh(): JsonResponse { return response()->json(['data' => ['token' => auth('api')->refresh(), 'type' => 'bearer']]); }
    public function logout(): JsonResponse { auth('api')->logout(); return response()->json(['message' => 'Logged out']); }
}
