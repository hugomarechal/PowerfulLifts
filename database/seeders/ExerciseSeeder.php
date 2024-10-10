<?php

namespace Database\Seeders;

use App\Models\Exercise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Exercise::create(['name'=>'Squat']);
        Exercise::create(['name'=>'Bench Press']);
        Exercise::create(['name'=>'Deadlift']);
    }
}
