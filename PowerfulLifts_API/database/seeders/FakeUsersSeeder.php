<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FakeUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'created_at' => now()->subDays(30),
                'updated_at' => now()->subDays(30),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'created_at' => now()->subDays(25),
                'updated_at' => now()->subDays(25),
            ],
        ];

        DB::table('users')->insert($users);

        // Poids corporel pour chaque utilisateur
        $bodyweights = [
            // John Doe
            ['user_id' => 2, 'bodyweight' => 85.0, 'created_at' => now()->subDays(30), 'updated_at' => now()->subDays(30)],
            ['user_id' => 2, 'bodyweight' => 84.5, 'created_at' => now()->subDays(15), 'updated_at' => now()->subDays(15)],
            ['user_id' => 2, 'bodyweight' => 84.0, 'created_at' => now(), 'updated_at' => now()],

            // Jane Smith
            ['user_id' => 3, 'bodyweight' => 60.0, 'created_at' => now()->subDays(25), 'updated_at' => now()->subDays(25)],
            ['user_id' => 3, 'bodyweight' => 59.5, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 3, 'bodyweight' => 59.0, 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('bodyweights')->insert($bodyweights);

        // Sets pour chaque utilisateur
        $sets = [
            // Sets pour John Doe
            ['user_id' => 2, 'name' => 'Squat', 'weight' => 100.0, 'repetitions' => 5, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 2, 'name' => 'Squat', 'weight' => 105.0, 'repetitions' => 5, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 2, 'name' => 'Squat', 'weight' => 110.0, 'repetitions' => 5, 'created_at' => now(), 'updated_at' => now()],

            ['user_id' => 2, 'name' => 'Bench Press', 'weight' => 75.0, 'repetitions' => 8, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 2, 'name' => 'Bench Press', 'weight' => 77.5, 'repetitions' => 8, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 2, 'name' => 'Bench Press', 'weight' => 80.0, 'repetitions' => 8, 'created_at' => now(), 'updated_at' => now()],

            ['user_id' => 2, 'name' => 'Deadlift', 'weight' => 140.0, 'repetitions' => 3, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 2, 'name' => 'Deadlift', 'weight' => 150.0, 'repetitions' => 3, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 2, 'name' => 'Deadlift', 'weight' => 160.0, 'repetitions' => 3, 'created_at' => now(), 'updated_at' => now()],

            // Sets pour Jane Smith
            ['user_id' => 3, 'name' => 'Squat', 'weight' => 60.0, 'repetitions' => 8, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 3, 'name' => 'Squat', 'weight' => 65.0, 'repetitions' => 8, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 3, 'name' => 'Squat', 'weight' => 70.0, 'repetitions' => 8, 'created_at' => now(), 'updated_at' => now()],

            ['user_id' => 3, 'name' => 'Bench Press', 'weight' => 40.0, 'repetitions' => 10, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 3, 'name' => 'Bench Press', 'weight' => 45.0, 'repetitions' => 10, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 3, 'name' => 'Bench Press', 'weight' => 50.0, 'repetitions' => 10, 'created_at' => now(), 'updated_at' => now()],

            ['user_id' => 3, 'name' => 'Deadlift', 'weight' => 90.0, 'repetitions' => 6, 'created_at' => now()->subDays(20), 'updated_at' => now()->subDays(20)],
            ['user_id' => 3, 'name' => 'Deadlift', 'weight' => 100.0, 'repetitions' => 6, 'created_at' => now()->subDays(10), 'updated_at' => now()->subDays(10)],
            ['user_id' => 3, 'name' => 'Deadlift', 'weight' => 110.0, 'repetitions' => 6, 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('sets')->insert($sets);
    }
}
