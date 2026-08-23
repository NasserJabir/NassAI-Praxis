<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool { return $this->user()?->role === 'admin'; }
    public function rules(): array { return ['name' => ['required', 'string', 'max:160'], 'slug' => ['required', 'alpha_dash', 'unique:products,slug'], 'description' => ['nullable', 'string'], 'price' => ['required', 'numeric', 'min:0'], 'stock' => ['required', 'integer', 'min:0'], 'category_id' => ['required', 'exists:categories,id']]; }
}
