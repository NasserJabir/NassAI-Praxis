<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(api: __DIR__.'/../routes/api.php')
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias(['role' => App\Http\Middleware\RoleMiddleware::class]);
    })
    ->create();
