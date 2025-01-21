<?php
/*
use App\Http\Controllers\PasswordController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('landing');
})->name('landing');

Route::middleware('guest')->group(function() {
    Route::get('/signup', function () {
        return Inertia::render('SignUp');
    });
    Route::post('signup', [\App\Http\Controllers\UserController::class, 'signup'])->name('signup');

    Route::get('/login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::post('login', [\App\Http\Controllers\UserController::class, 'login'])->name('login.post');

    Route::get('forgot-password', [PasswordController::class, 'create'])->name('password.request');
    Route::post('forgot-password', [PasswordController::class, 'store'])->name('password.email');
    Route::get('reset-password/{token}', [PasswordController::class, 'create'])->name('password.reset');
    Route::post('reset-password', [PasswordController::class, 'store'])->name('password.store');
});


Route::middleware('auth:sanctum')->group(function() {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'getDashboard'])->name('dashboard');

    Route::get('personal-records', [\App\Http\Controllers\SetController::class, 'showPersonalRecords'])->name('personal-records.show');
    Route::post('set', [\App\Http\Controllers\SetController::class, 'store'])->name('set.store');
    Route::put('set/{id}', [\App\Http\Controllers\SetController::class, 'update'])->name('set.update');

    Route::get('settings', [\App\Http\Controllers\UserController::class, 'getSettings'])->name('settings');
    Route::put('users/{id}', [\App\Http\Controllers\UserController::class, 'updateName'])->name('name.update');
    Route::post('logout', [\App\Http\Controllers\UserController::class, 'logout'])->name('logout');
    Route::delete('users/{id}', [\App\Http\Controllers\UserController::class, 'destroy'])->name('user.destroy');
});

Route::middleware(['auth', \App\Http\Middleware\AdminMiddleware::class])->group(function() {
    Route::get('/users', [\App\Http\Controllers\AdminController::class, 'getAllUsers'])->name('users.show');
    Route::put('admin/{id}', [\App\Http\Controllers\AdminController::class, 'update'])->name('admin.update');
    Route::delete('admin/{id}', [\App\Http\Controllers\AdminController::class, 'destroy'])->name('admin.destroy');

});*/
