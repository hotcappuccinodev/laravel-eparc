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
        Schema::create('driver', function (Blueprint $table) {
            
            $table->id('ID_DRIVER', 60);
            $table->string('DRIVER_NAME', 60)->nullable();
            $table->string('DRIVER_FIRST_NAME', 60)->nullable();
            $table->string('DRIVER_LICENSE_NUMBER', 60)->nullable();
            $table->date('DRIVER_LICENSE_EXPIRATION_DATE')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('driver');
    }
};
