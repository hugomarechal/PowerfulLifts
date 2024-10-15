<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SetController extends Controller
{
    public function store(Request $request)
    {
        Set::create([
            'workout_id' => $request->workoutId,
            'name' => $request->name,
            'repetitions' => $request->repetitions,
            'weight' => $request->weight,
        ]);

        return back();
    }
}
