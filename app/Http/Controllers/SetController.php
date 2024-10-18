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

    public function update(Request $request, $id)
    {
        Set::findOrFail($id)->update(
            $request->validate([
                'repetitions' => ['required', 'integer'],
                'weight' => ['required', 'numeric'],
            ])
        );

        return back();
    }

    public function showPersonalRecords()
    {
        $squats = DB::table('sets')->where(['name' => 'Squat'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();
        $benches = DB::table('sets')->where(['name' => 'Bench Press'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();
        $deadlifts = DB::table('sets')->where(['name' => 'Deadlift'])->orderBy('repetitions', 'asc')->orderBy('weight', 'desc')->get();

        $filtered_squats = [];
        $filtered_benches = [];
        $filtered_deadlifts = [];

        $currentRM = 0;
        foreach ($squats as $squat)
        {
            if ($squat->repetitions > $currentRM)
            {
                $filtered_squats[] = $squat;
                $currentRM = $squat->repetitions;
            }
        }

        $currentRM = 0;
        foreach ($benches as $bench)
        {
            if ($bench->repetitions > $currentRM)
            {
                $filtered_benches[] = $bench;
                $currentRM = $bench->repetitions;
            }
        }

        $currentRM = 0;
        foreach ($deadlifts as $deadlift)
        {
            if ($deadlift->repetitions > $currentRM)
            {
                $filtered_deadlifts[] = $deadlift;
                $currentRM = $deadlift->repetitions;
            }
        }


        return Inertia::render('PersonalRecordsTable', ['squats' => $filtered_squats, 'benches' => $filtered_benches, 'deadlifts' => $filtered_deadlifts]);
    }
}
