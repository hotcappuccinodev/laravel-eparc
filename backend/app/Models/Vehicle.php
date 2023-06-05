<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'ID_VEHICLE';
    protected $fillable=[
              'ID_VEHICLE',
              'VEHICLE_MODEL',
              'VEHICLE_BRAND',
              'VEHICLE_MANUFACTURING_YEAR',
              'VEHICLE_REGISTRATION',
              'VEHICLE_MILEAGE',
              'CHASSIS_NUMBER',
              'color',
              'image'
    ];
}
