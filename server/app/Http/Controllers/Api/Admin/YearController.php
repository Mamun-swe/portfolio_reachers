<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Year;
use Illuminate\Http\Request;
use Validator;

class YearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $years = Year::select('id', 'year')->get();
        return response()->json($years, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'year' => 'required|string',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
            ], 422);
        }

        $form_data = array(
            'year' => $request->year,
        );

        $year = Year::create($form_data);

        if (!$year) {
            return response()->json([
                'message' => 'Internal server error.',
            ], 501);
        }

        return response()->json([
            'message' => 'Successfully year created.',
        ], 201);
    }
}
