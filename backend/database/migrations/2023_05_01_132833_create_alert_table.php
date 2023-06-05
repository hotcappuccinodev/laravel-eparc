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
            Schema::create('alert', function (Blueprint $table) {
                $table->bigInteger('ID_NOTIFICATION')->unsigned();
                $table->bigInteger('ID_DRIVER')->unsigned();
                $table->bigInteger('ID_VEHICLE')->unsigned();
                $table->date('ALERT_DATE')->nullable();
                $table->timestamps();
            
                $table->primary(['ID_NOTIFICATION', 'ID_DRIVER', 'ID_VEHICLE']);
            
                $table->foreign('ID_NOTIFICATION')->references('ID_NOTIFICATION')->on('NOTIFICATION');
                $table->foreign('ID_DRIVER')->references('ID_DRIVER')->on('DRIVER');
                $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('VEHICLE');
            });
            
       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alert');
    }
};
