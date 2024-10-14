<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

//guest routes

Route::get('/signup', function () {
    return Inertia::render('SignUp');
});
Route::post('signup', [\App\Http\Controllers\UserController::class, 'signup'])->name('signup');

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::post('login', [\App\Http\Controllers\UserController::class, 'login'])->name('login');

//auth routes
Route::middleware('auth')->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('BaseDashboard');
    })->name('dashboard');

    Route::post('logout', [\App\Http\Controllers\UserController::class, 'logout'])->name('logout');
});
