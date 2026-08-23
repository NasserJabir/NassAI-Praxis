<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class RbacTest extends TestCase
{
    public function test_regular_users_cannot_list_users(): void { $this->actingAs(User::factory()->create(['role' => 'user']), 'api')->getJson('/api/v1/users')->assertForbidden(); }
    public function test_admin_can_list_users(): void { $this->actingAs(User::factory()->create(['role' => 'admin']), 'api')->getJson('/api/v1/users')->assertOk(); }
}
