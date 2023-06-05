<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Validator;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehicles = Vehicle::all();
       
        return response()->json([
            'success' => true,
            'message' => 'All Vehicles',
            'data' => $vehicles
        ]);   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'VEHICLE_MODEL' => 'required',
            'VEHICLE_BRAND' => 'required',
            'VEHICLE_MANUFACTURING_YEAR' => 'required',
            'VEHICLE_REGISTRATION' => 'required',
            'CHASSIS_NUMBER' => 'required',
            'VEHICLE_MILEAGE' => 'required',
            'color' => 'required',
            'image' => 'required|image',
        ]);

        $imageName = Str::random() . '.' . $request->file('image')->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('vehicle/image', $request->file('image'), $imageName);

        $vehicle = new Vehicle;
        $vehicle->VEHICLE_MODEL = $request->input('VEHICLE_MODEL');
        $vehicle->VEHICLE_BRAND = $request->input('VEHICLE_BRAND');
        $vehicle->VEHICLE_MANUFACTURING_YEAR = $request->input('VEHICLE_MANUFACTURING_YEAR');
        $vehicle->VEHICLE_REGISTRATION = $request->input('VEHICLE_REGISTRATION');
        $vehicle->CHASSIS_NUMBER = $request->input('CHASSIS_NUMBER');
        $vehicle->VEHICLE_MILEAGE = $request->input('VEHICLE_MILEAGE');
        $vehicle->color = $request->input('color');
        $vehicle->image = $imageName;
        $vehicle->save();

        return response()->json([
            'message' => 'Item added successfully',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $vehicle)
    {
        return response()->json([
            'vehicle' => $vehicle,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
   public function update(Request $request, Vehicle $vehicle)
{
    $input = $request->all();

    $validator = Validator::make($input, [
        'VEHICLE_MODEL' => 'required',
        'VEHICLE_BRAND' => 'required',
        'VEHICLE_MANUFACTURING_YEAR' => 'required',
        'VEHICLE_REGISTRATION' => 'required',
        'CHASSIS_NUMBER' => 'required',
        'VEHICLE_MILEAGE' => 'required',
        'color' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
        ]);
    }

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/vehicle/image', $imageName);
        $input['image'] = $imageName;
    }

    $vehicle->update($input);

    return response()->json([
        'success' => true,
        'message' => 'Vehicle has been updated successfully',
        'data' => $vehicle,
    ]);
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $vehicle)
    {
        if ($vehicle->image) {
            Storage::disk('public')->delete("vehicle/image/{$vehicle->image}");
        }

        $vehicle->delete();

        return response()->json([
            'message' => 'Item deleted successfully',
        ]);
    }
}
