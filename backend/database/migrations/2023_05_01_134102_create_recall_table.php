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
        Schema::create('recall', function (Blueprint $table) {
            $table->id('ID_RECALL', 60);
            $table->bigInteger('ID_VEHICLE')->unsigned();
            $table->string('RECALL_DESCRIPTION', 60)->nullable();
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
        Schema::dropIfExists('recall');
    }
};
