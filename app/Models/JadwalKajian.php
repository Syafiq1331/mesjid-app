<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalKajian extends Model
{
    use HasFactory;

    protected $table = 'jadwal_kajian';

    protected $guarded = [
        'created_at',
        'updated_at',
    ];
}
