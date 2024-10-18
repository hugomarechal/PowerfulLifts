<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function getDashboard() {

        $squat_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Squat'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();
        $bench_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Bench Press'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();
        $deadlift_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Deadlift'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();

        return Inertia::render('BaseDashboard', ['user' => auth()->user(), 'records' => ['squat' => $squat_PR, 'bench' => $bench_PR, 'deadlift' => $deadlift_PR]]);
    }
}
