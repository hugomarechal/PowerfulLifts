<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PersonalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'set_id',
        'date'
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function sets(): BelongsTo
    {
        return $this->belongsTo(Set::class);
    }


}
