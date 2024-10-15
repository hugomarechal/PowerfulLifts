<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function getDashboard() {
        return Inertia::render('BaseDashboard', ['user' => auth()->user()]);
    }
}
