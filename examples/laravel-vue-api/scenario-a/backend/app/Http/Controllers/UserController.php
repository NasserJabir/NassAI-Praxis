<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function __construct(private readonly UserRepository $users) {}
    public function index(): JsonResponse { return response()->json(['data' => $this->users->paginate()]); }
}
