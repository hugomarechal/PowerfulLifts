<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('landing');
});

Route::middleware('guest')->group(function() {
    Route::get('/signup', function () {
        return Inertia::render('SignUp');
    });
    Route::post('signup', [\App\Http\Controllers\UserController::class, 'signup'])->name('signup');

    Route::get('/login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::post('login', [\App\Http\Controllers\UserController::class, 'login'])->name('login.post');
});


Route::middleware('auth')->group(function() {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'getDashboard'])->name('dashboard');

    Route::post('set', [\App\Http\Controllers\SetController::class, 'store'])->name('set.store');
    Route::get('personal-records', [\App\Http\Controllers\SetController::class, 'showPersonalRecords'])->name('personal-records.show');

    Route::post('logout', [\App\Http\Controllers\UserController::class, 'logout'])->name('logout');
    Route::get('settings', [\App\Http\Controllers\UserController::class, 'getSettings'])->name('settings');
});
