<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Set extends Model
{
    use HasFactory;

    protected $fillable = [
        'repetitions',
        'weight',
        'workout_id',
        'exercise_id'
    ];

    public function workouts(): BelongsTo
    {
        return $this->belongsTo(Workout::class);
    }
    public function exercises(): BelongsTo
    {
        return $this->belongsTo(Exercise::class);
    }

}
