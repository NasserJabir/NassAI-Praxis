<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class ProductValidationTest extends TestCase
{
    public function test_invalid_price_is_rejected(): void { $this->actingAs(User::factory()->create(['role' => 'admin']), 'api')->postJson('/api/v1/products', ['name' => 'Broken', 'slug' => 'broken', 'price' => -1, 'stock' => 1, 'category_id' => 1])->assertUnprocessable()->assertJsonValidationErrors(['price']); }
}
