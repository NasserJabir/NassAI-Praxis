<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void { Schema::create('categories', function (Blueprint $table): void { $table->id(); $table->string('name'); $table->string('slug')->unique(); $table->timestamps(); }); Schema::create('products', function (Blueprint $table): void { $table->id(); $table->foreignId('category_id')->constrained(); $table->string('name'); $table->string('slug')->unique(); $table->text('description')->nullable(); $table->decimal('price', 10, 2); $table->unsignedInteger('stock'); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('products'); Schema::dropIfExists('categories'); }
};
