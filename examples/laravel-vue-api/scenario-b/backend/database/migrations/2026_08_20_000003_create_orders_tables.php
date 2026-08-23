<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void { Schema::create('orders', function (Blueprint $table): void { $table->id(); $table->foreignId('user_id')->constrained(); $table->string('status')->default('pending'); $table->decimal('total', 10, 2); $table->timestamps(); }); Schema::create('order_items', function (Blueprint $table): void { $table->id(); $table->foreignId('order_id')->constrained(); $table->foreignId('product_id')->constrained(); $table->unsignedInteger('quantity'); $table->decimal('unit_price', 10, 2); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('order_items'); Schema::dropIfExists('orders'); }
};
