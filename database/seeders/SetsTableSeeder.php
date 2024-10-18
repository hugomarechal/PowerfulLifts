<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Set;

class SetsTableSeeder extends Seeder
{
    public function run()
    {
        // Bench Press
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 1, 'weight' => 62.5, 'created_at' => '2024-06-02', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 2, 'weight' => 60, 'created_at' => '2024-06-06', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 3, 'weight' => 57.5, 'created_at' => '2024-04-19', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 4, 'weight' => 52.5, 'created_at' => '2024-06-29', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 5, 'weight' => 55, 'created_at' => '2024-04-06', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 6, 'weight' => 55, 'created_at' => '2024-06-02', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 7, 'weight' => 52.5, 'created_at' => '2023-05-19', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 8, 'weight' => 52.5, 'created_at' => '2024-08-16', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 9, 'weight' => 50, 'created_at' => '2024-05-01', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 9, 'weight' => 50, 'created_at' => '2024-07-07', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 10, 'weight' => 50, 'created_at' => '2024-05-01', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 11, 'weight' => 50, 'created_at' => '2024-06-28', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 12, 'weight' => 50, 'created_at' => '2024-07-20', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Bench Press', 'repetitions' => 13, 'weight' => 45, 'created_at' => '2024-07-12', 'updated_at' => now()]);

        // Deadlift
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 1, 'weight' => 120, 'created_at' => '2024-06-17', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 2, 'weight' => 110, 'created_at' => '2024-03-19', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 3, 'weight' => 107.5, 'created_at' => '2024-05-18', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 4, 'weight' => 105, 'created_at' => '2024-04-20', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 6, 'weight' => 100, 'created_at' => '2024-03-31', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 7, 'weight' => 97.5, 'created_at' => '2024-06-15', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 8, 'weight' => 97.5, 'created_at' => '2024-06-29', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 10, 'weight' => 95, 'created_at' => '2024-05-02', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 11, 'weight' => 80, 'created_at' => '2024-07-16', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 12, 'weight' => 85, 'created_at' => '2024-07-20', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Deadlift', 'repetitions' => 13, 'weight' => 82.5, 'created_at' => '2024-07-19', 'updated_at' => now()]);

        // Squat
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 1, 'weight' => 80, 'created_at' => '2024-06-01', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 2, 'weight' => 80, 'created_at' => '2024-06-02', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 3, 'weight' => 77.5, 'created_at' => '2024-07-20', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 4, 'weight' => 75, 'created_at' => '2024-07-15', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 5, 'weight' => 72.5, 'created_at' => '2024-07-19', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 6, 'weight' => 70, 'created_at' => '2024-06-17', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 7, 'weight' => 65, 'created_at' => '2024-05-02', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 8, 'weight' => 62.5, 'created_at' => '2024-04-26', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 10, 'weight' => 62.5, 'created_at' => '2024-05-19', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 11, 'weight' => 62.5, 'created_at' => '2024-06-10', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 12, 'weight' => 55, 'created_at' => '2023-04-20', 'updated_at' => now()]);
        Set::create(['user_id' => 1, 'name' => 'Squat', 'repetitions' => 13, 'weight' => 52, 'created_at' => '2024-06-12', 'updated_at' => now()]);
    }
}
