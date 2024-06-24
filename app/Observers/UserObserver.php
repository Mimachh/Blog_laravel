<?php

namespace App\Observers;

use App\Models\Role;
use App\Models\User;

class UserObserver
{
  
    public function created(User $user)
    {
        $userRole = Role::where('slug', 'user')->first();

        if ($userRole) {
            $user->roles()->attach($userRole->id);
        }
    }
}