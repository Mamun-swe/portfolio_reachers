<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use Illuminate\Http\Request;
use Validator;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $publications = Publication::orderBy('id', 'DESC')
            ->select('id', 'title', 'year')
            ->get();
        return response()->json($publications, 200);
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
            'title' => 'required|string',
            'description' => 'required|string',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
            ], 422);
        }

        $form_data = array(
            'year' => $request->year,
            'title' => $request->title,
            'description' => $request->description,
        );

        $publication = Publication::create($form_data);

        if (!$publication) {
            return response()->json([
                'message' => 'Internal server error.',
            ], 501);
        }

        return response()->json([
            'message' => 'Successfully publication created.',
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $publication = Publication::where('id', $id)
            ->select('id', 'year', 'title', 'description', 'created_at')
            ->first();
        if (!$publication) {
            return response()->json(['message' => 'Opps publication not found !!'], 404);
        }
        return response()->json($publication, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'year' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
            ], 422);
        }

        $form_data = array(
            'year' => $request->year,
            'title' => $request->title,
            'description' => $request->description,
        );

        $record = Publication::find($id);
        $record->update($form_data);

        if (!$record) {
            return response()->json([
                'message' => 'Internal server error.',
            ], 501);
        }

        return response()->json([
            'message' => 'Successfully publication updated.',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
