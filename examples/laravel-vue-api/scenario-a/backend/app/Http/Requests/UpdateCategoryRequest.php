<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends StoreCategoryRequest
{
    public function rules(): array { return ['name' => ['sometimes', 'required', 'string', 'max:120'], 'slug' => ['sometimes', 'required', 'alpha_dash', 'unique:categories,slug,' . $this->route('category')?->id]]; }
}
