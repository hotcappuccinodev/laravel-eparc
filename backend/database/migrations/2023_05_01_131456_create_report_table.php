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
        Schema::create('report', function (Blueprint $table) {
            $table->id('ID_REPORT', 60);
            $table->unsignedBigInteger('ID_DRIVER');
            $table->unsignedBigInteger('ID_VEHICLE');
            $table->string('TYPE_REPORT', 60)->nullable();
            $table->date('DATE_REPORT')->nullable();
            $table->timestamps();
        
            $table->foreign('ID_DRIVER')->references('ID_DRIVER')->on('driver');
            $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('vehicle');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report');
    }
};
