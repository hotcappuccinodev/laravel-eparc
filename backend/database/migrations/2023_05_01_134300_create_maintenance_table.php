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
        Schema::create('maintenance', function (Blueprint $table) {
            $table->id('ID_MAINTENANCE', 60);
            $table->bigInteger('ID_VEHICLE')->unsigned();
            $table->bigInteger('ID_DRIVER')->unsigned();
            $table->date('MAINTENANCE_DATE')->nullable();
            $table->string('MAINTENANCE_TYPE', 60)->nullable();
            $table->string('MAINTENANCE_DESCRIPTION', 255)->nullable();
            $table->string('MAINTENANCE_COST', 60)->nullable();
            $table->timestamps();
            
            $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('VEHICLE');
            $table->foreign('ID_DRIVER')->references('ID_DRIVER')->on('DRIVER');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintenance');
    }
};
