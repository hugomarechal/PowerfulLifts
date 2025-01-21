<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);
Route::post('/signup', [\App\Http\Controllers\UserController::class, 'signup']);


//connected user

Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout'])->middleware('auth:web');
Route::get('/current-user', [\App\Http\Controllers\UserController::class, 'getCurrentUser'])->middleware('auth:sanctum');
Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'getDashboard'])->middleware('auth:sanctum');
Route::get('/current-bodyweight', [\App\Http\Controllers\DashboardController::class, 'getBodyweight'])->middleware('auth:sanctum');
Route::post('/current-bodyweight', [\App\Http\Controllers\DashboardController::class, 'store'])->middleware('auth:sanctum');
Route::post('/set', [\App\Http\Controllers\SetController::class, 'store'])->middleware('auth:sanctum');;
Route::put('/set/{id}', [\App\Http\Controllers\SetController::class, 'update'])->middleware('auth:sanctum');;
Route::get('personal-records', [\App\Http\Controllers\SetController::class, 'showPersonalRecords'])->middleware('auth:sanctum');


//admin
Route::get('/users', [\App\Http\Controllers\AdminController::class, 'getAllUsers'])->middleware(['auth:sanctum']);
Route::post('/addUser', [\App\Http\Controllers\AdminController::class, 'store'])->middleware(['auth:sanctum']);
Route::put('/admin/{id}', [\App\Http\Controllers\AdminController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/admin/{id}', [\App\Http\Controllers\AdminController::class, 'destroy'])->middleware('auth:sanctum');
