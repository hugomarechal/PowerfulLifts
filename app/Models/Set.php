<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Set extends Model
{
    use HasFactory;

    protected $fillable = [
        'workout_id',
        'exercise_id',
        'name',
        'repetitions',
        'weight',
    ];

    public function workouts(): BelongsTo
    {
        return $this->belongsTo(Workout::class);
    }
}
