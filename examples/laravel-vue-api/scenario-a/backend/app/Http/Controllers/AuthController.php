<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request): mixed { $user = User::create(['name' => $request->name, 'email' => $request->email, 'password' => Hash::make($request->password)]); return response()->json(['access_token' => auth('api')->login($user)]); }
    public function login(Request $request): mixed { return response()->json(['token' => auth('api')->attempt($request->only('email', 'password'))]); }
}
