<?php

namespace App\Http\Controllers;

use App\Models\Set;
use App\Models\Workout;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    // @TODO: delete empty workouts
    public function startWorkout() {
        $currentWorkout = Workout::where(['user_id' => auth()->id(), 'active' => true])->first();
        if ($currentWorkout) {
            $workout = $currentWorkout;
        } else {
            $workout = Workout::create(
                ['user_id' => auth()->id(), 'active' => true]
            );
        }

        return Inertia::render('ExerciseSelection', ['workoutId' => $workout->id]);
    }

    public function endWorkout()
    {
        Workout::where(['user_id' => auth()->id(), 'active' => true])->update(
            ['active' => false]
        );

        return redirect('dashboard');
    }

    /*public function listWorkouts()
    {
        $user_workouts = Workout::selec

        dd($user_workouts);

        return Inertia::render('Components/Workout/WorkoutHistory', ['workouts' => $user_workouts]);
    }*/
}
