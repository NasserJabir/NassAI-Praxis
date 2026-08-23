<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    public function authorize(): bool { return $this->user()?->role === 'admin'; }
    public function rules(): array { return ['name' => ['required', 'string', 'max:120'], 'slug' => ['required', 'alpha_dash', 'unique:categories,slug']]; }
}
