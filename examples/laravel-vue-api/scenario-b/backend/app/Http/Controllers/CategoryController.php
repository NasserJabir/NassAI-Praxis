<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function __construct(private readonly CategoryRepository $categories) {}
    public function index(): JsonResponse { return response()->json(['data' => $this->categories->paginate()]); }
    public function store(StoreCategoryRequest $request): JsonResponse { return response()->json(['data' => $this->categories->create($request->validated())], 201); }
    public function show(Category $category): JsonResponse { return response()->json(['data' => $category]); }
    public function update(UpdateCategoryRequest $request, Category $category): JsonResponse { return response()->json(['data' => $this->categories->update($category, $request->validated())]); }
    public function destroy(Category $category): JsonResponse { $category->delete(); return response()->json([], 204); }
}
