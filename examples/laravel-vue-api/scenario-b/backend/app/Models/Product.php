<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'price', 'stock', 'category_id'];
    protected $casts = ['price' => 'decimal:2', 'stock' => 'integer'];
    public function category() { return $this->belongsTo(Category::class); }
}
