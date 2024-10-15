<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware('guest')->group(function() {
    Route::get('/signup', function () {
        return Inertia::render('SignUp');
    });
    Route::post('signup', [\App\Http\Controllers\UserController::class, 'signup'])->name('signup');

    Route::get('/login', function () {
        return Inertia::render('Login');
    });

    Route::post('login', [\App\Http\Controllers\UserController::class, 'login'])->name('login');
});


Route::middleware('auth')->group(function() {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'getDashboard'])->name('dashboard');
    Route::get('/new-workout', [\App\Http\Controllers\WorkoutController::class, 'startWorkout'])->name('new-workout');
    Route::post('/end-workout', [\App\Http\Controllers\WorkoutController::class, 'endWorkout'])->name('end-workout');
    Route::post('set', [\App\Http\Controllers\SetController::class, 'store'])->name('set.store');
    Route::post('logout', [\App\Http\Controllers\UserController::class, 'logout'])->name('logout');
});
