<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    public function test_admin_can_crud_categories(): void { $admin = User::factory()->create(['role' => 'admin']); $this->actingAs($admin, 'api')->postJson('/api/v1/categories', ['name' => 'Books', 'slug' => 'books'])->assertCreated(); $this->actingAs($admin, 'api')->getJson('/api/v1/categories')->assertOk(); }
    public function test_user_cannot_manage_categories(): void { $this->actingAs(User::factory()->create(['role' => 'user']), 'api')->postJson('/api/v1/categories', ['name' => 'Books', 'slug' => 'books'])->assertForbidden(); }
}
