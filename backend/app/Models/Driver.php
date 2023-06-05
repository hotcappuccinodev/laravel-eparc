<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;
    protected $primaryKey = 'ID_DRIVER';


   protected $fillable=[
     'DRIVER_ID',
     'DRIVER_NAME',
     'DRIVER_FIRST_NAME',
     'DRIVER_LICENSE_NUMBER',
     'DRIVER_LICENSE_EXPIRATION_DATE'

   ];
}
