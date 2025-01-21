<?php

namespace App\Http\Controllers;

use App\Http\Requests\BodyweightRequest;
use App\Models\Bodyweight;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function getDashboard() {

        $squat_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Squat'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();
        $bench_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Bench Press'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();
        $deadlift_PR = DB::table('sets')->where(['user_id' => auth()->id(),'name' => 'Deadlift'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->first();

        return response()->json(['user' => auth()->user(), 'records' => ['squat' => $squat_PR, 'bench' => $bench_PR, 'deadlift' => $deadlift_PR]]);
    }

    public function getBodyweight() {
        $current_bodyweight = DB::table('bodyweights')->where(['user_id' => auth()->id()])->orderBy('created_at', 'desc')->first();
        $all_bodyweight = DB::table('bodyweights')->where(['user_id' => auth()->id()])->orderBy('created_at', 'desc')->get();

        return response()->json(['currentBodyweight' => $current_bodyweight, 'allBodyweight' => $all_bodyweight]);
    }

    public function store(BodyweightRequest $request) {
        $request->validated();

        Bodyweight::create([
            'user_id' =>  $request->userId,
            'bodyweight' =>  $request->bodyweight,
        ]);

        return response()->json([
            'message' => 'Bodyweight updated'
        ]);
    }
}
