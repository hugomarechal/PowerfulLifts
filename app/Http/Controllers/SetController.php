<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewSetRequest;
use App\Models\Set;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SetController extends Controller
{
    public function store(NewSetRequest $request)
    {
        $request->validated();

        Set::create([
            'user_id' =>  $request->userId,
            'name' =>  $request->name,
            'repetitions' =>  $request->repetitions,
            'weight' =>  $request->weight,
        ]);

        return back();
    }

    public function showPersonalRecords()
    {
        $squat = DB::table('sets')->where(['name' => 'Squat'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();
        $bench = DB::table('sets')->where(['name' => 'Bench Press'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();
        $deadlift = DB::table('sets')->where(['name' => 'Deadlift'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();
        return Inertia::render('PersonalRecordsTable', ['squats' => $squat, 'benches' => $bench, 'deadlifts' => $deadlift]);
    }
}
