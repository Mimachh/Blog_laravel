<?php

namespace App\Bootstrappers;

use Illuminate\Foundation\Configuration\Middleware;

class MiddlewareBootstrapper
{

    public function __invoke(Middleware $middleware): void
    {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            \App\Http\Middleware\InjectLocaleData::class,
        ]);

        $middleware->alias([
          
        ]);
    }
}
