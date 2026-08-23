<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = ['order_id', 'product_id', 'quantity', 'unit_price'];
    protected $casts = ['quantity' => 'integer', 'unit_price' => 'decimal:2'];
}
