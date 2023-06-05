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
        
            Schema::create('insurance', function (Blueprint $table) {
                $table->id('ID_INSURANCE');
                $table->bigInteger('ID_VEHICLE')->unsigned();
                $table->string('INSURANCE_COMPANY', 60)->nullable();
                $table->string('INSURANCE_NUMBER', 60)->nullable();
                $table->date('START_DATE')->nullable();
                $table->date('EXPIRATION_DATE')->nullable();
                $table->timestamps();
    
                $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('VEHICLE');
            });
      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurance');
    }
};
