<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicle', function (Blueprint $table) {

            $table->id('ID_VEHICLE', 60);
            $table->string('VEHICLE_MODEL', 60)->nullable();
            $table->string('VEHICLE_BRAND', 60)->nullable();
            $table->string('VEHICLE_MANUFACTURING_YEAR')->nullable();
            $table->string('VEHICLE_REGISTRATION', 60)->nullable();
            $table->string('VEHICLE_MILEAGE', 60)->nullable();
            $table->string('CHASSIS_NUMBER', 60)->nullable();
            $table->string('color', 60)->nullable();
            $table->text('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle');
    }
};
