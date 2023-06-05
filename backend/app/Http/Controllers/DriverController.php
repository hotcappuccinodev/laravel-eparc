<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use Validator;

class DriverController extends Controller
{
     
    public function index(){

        $driver = Driver::all();
       
        return response()->json([
            'success'=>true,
            'message'=>'All Drivers',
            'data'=>$driver
            ]);   
    }
    public function store(Request $request){

        $input = $request->all();
        $validator = Validator::make($input,[
            
            'DRIVER_NAME'=>'required',
            'DRIVER_FIRST_NAME'=>'required',
            'DRIVER_LICENSE_NUMBER'=>'required',
            'DRIVER_LICENSE_EXPIRATION_DATE'=>'required'
            
        ]);
        if($validator->fails()){
            return response()->json([
                'fail'=>false,
                'message'=>'Sorry,not stored!',
                'err'=>$validator->errors()
                ]);  

        }
        $driver= Driver::create($input);
        return response()->json([
            'success'=>true,
            'message'=>'Driver added successfully',
            'data'=>$driver
            ]);   
    }
    
    public function show($id){

        $driver= Driver::find($id);

        if(is_null($driver)){
            return response()->json([
                'fail'=>false,
                'message'=>'Sorry,not found!'
                ]);  

        }
        return response()->json([
            'success'=>true,
            'message'=>'Driver fetched successfully',
            'data'=>$driver
            ]);   
    }
    public function update(Request $request, Driver $driver) {
        $input = $request->all();
      
        $validator = Validator::make($input, [
          'DRIVER_NAME' => 'required',
          'DRIVER_FIRST_NAME' => 'required',
          'DRIVER_LICENSE_NUMBER' => 'required',
          'DRIVER_LICENSE_EXPIRATION_DATE' => 'required|date',
        ]);
      
        if ($validator->fails()) {
          return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
          ]);
        }
      
        $driver->update($input);
      
        return response()->json([
          'success' => true,
          'message' => 'Driver has been updated successfully',
          'data' => $driver,
        ]);
      }

            public function destroy(Driver $driver)
            {
                $driver->delete();
        
                return response()->json([
                    'message' => 'Item deleted successfully',
                ]);
            }
    }

