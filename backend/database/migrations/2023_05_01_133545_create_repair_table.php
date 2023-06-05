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
      
            Schema::create('repair', function (Blueprint $table) {
                $table->id('ID_REPAIR', 60);
                $table->bigInteger('ID_NOTIFICATION')->unsigned();
                $table->bigInteger('ID_VEHICLE')->unsigned();
                $table->string('TYPE', 60)->nullable();
                $table->date('DATE')->nullable();
                $table->string('COST', 60)->nullable();
                $table->timestamps();
                $table->foreign('ID_VEHICLE')->references('ID_VEHICLE')->on('VEHICLE');
                $table->foreign('ID_NOTIFICATION')->references('ID_NOTIFICATION')->on('ALERT');

    
            });
       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repair');
    }
};
