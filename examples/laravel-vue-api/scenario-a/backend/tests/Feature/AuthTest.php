<?php

namespace Tests\Feature;

use Tests\TestCase;

class AuthTest extends TestCase
{
    public function test_user_can_register_login_refresh_and_logout(): void
    {
        $this->postJson('/api/v1/auth/register', ['name' => 'Ada', 'email' => 'ada@example.test', 'password' => 'password123', 'password_confirmation' => 'password123'])->assertCreated()->assertJsonStructure(['data.user', 'token']);
        $login = $this->postJson('/api/v1/auth/login', ['email' => 'ada@example.test', 'password' => 'password123'])->assertOk()->json('data.token');
        $this->withToken($login)->postJson('/api/v1/auth/refresh')->assertOk()->assertJsonStructure(['data.token']);
        $this->withToken($login)->postJson('/api/v1/auth/logout')->assertOk();
    }
}
