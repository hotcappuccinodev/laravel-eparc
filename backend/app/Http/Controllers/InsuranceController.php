<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Insurance;

use Validator;

class InsuranceController extends Controller
{
    public function index(){
        $insurance= Insurance::all();
        return response()->json([
            'success'=>true,
            'message'=>'All insurances',
            'data'=>$insurance
            ]);        

    }
    public function store(Request $request)
{
    $input = $request->all();
    $input['ID_VEHICLE'] = $request->input('ID_VEHICLE');
    
    $validator = Validator::make($input, [
        'ID_VEHICLE' => 'required',
        'INSURANCE_COMPANY' => 'required',
        'INSURANCE_NUMBER' => 'required',
        'START_DATE' => 'required',
        'EXPIRATION_DATE' => 'required|date'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'fail' => false,
            'message' => 'Sorry, not stored!',
            'err' => $validator->errors()
        ]);
    }

    $insurance = Insurance::create($input);

    return response()->json([
        'success' => true,
        'message' => 'Insurance created successfully',
        'data' => $insurance
    ]);
}

            
            public function show($id){
        
                $insurance= Insurance::find($id);
        
                if(is_null($insurance)){
                    return response()->json([
                        'fail'=>false,
                        'message'=>'Sorry,not found!'
                        ]);  
        
                }
                return response()->json([
                    'success'=>true,
                    'message'=>'Insurance fetched successfully',
                    'data'=>$insurance
                    ]);   
            }
            public function update(Request $request,Insurance $insurance){
        
                $input = $request->all();
                $validator=Validator::make($input,[
                    'ID_VEHICLE'=>'required',
                    'INSURANCE_COMPANY'=>'required',
                    'INSURANCE_NUMBER'=>'required',
                    'START_DATE'=>'required |date',
                    'EXPIRATION_DATE'=>'required |date'
                   
                ]);
                if($validator->fails()){
                    return response()->json([
                        'fail'=>false,
                        'message'=>'Sorry,not stored',
                        'err'=>$validator->errors()
                        ]);  
        
                }
                
                $insurance->INSURANCE_COMPANY = $input['INSURANCE_COMPANY'];
                $insurance->INSURANCE_NUMBER = $input['INSURANCE_NUMBER'];
                $insurance->START_DATE = $input['START_DATE'];
                $insurance->EXPIRATION_DATE = $input['EXPIRATION_DATE'];

               
                
                $insurance->save();
                return response()->json([
                    'success'=>true,
                    'message'=>'Insurance has been updated successfully',
                    'data'=>$insurance
                    ]);   
            }
            public function destroy(Insurance $insurance){
        
            $insurance->delete();
                
                return response()->json([
                    'success'=>true,
                    'message'=>'Insurance deleted successfully',
                    'data'=>$insurance
                    ]); 
        
            }


    }


