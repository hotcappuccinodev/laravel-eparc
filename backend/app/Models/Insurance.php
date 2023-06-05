<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_INSURANCE';
    
    protected $fillable=[
        'ID_INSURANCE',
        'ID_VEHICLE',
        'INSURANCE_COMPANY',
        'INSURANCE_NUMBER', 
        'START_DATE',
        'EXPIRATION_DATE'

    ];
}
