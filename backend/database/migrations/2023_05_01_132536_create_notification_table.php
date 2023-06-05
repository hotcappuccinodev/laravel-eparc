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
       
        Schema::create('notification', function (Blueprint $table) {
            $table->bigIncrements('ID_NOTIFICATION');
            $table->unsignedBigInteger('ID_VEHICLE');
            $table->string('TYPE', 60)->nullable();
            $table->date('DATE')->nullable();
            $table->timestamps();
                    
            $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('VEHICLE');
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification');
    }
};
