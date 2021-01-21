<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\BasicInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class BasicInfoController extends Controller
{
    // Root URL
    public function rootUrl()
    {
        return $url = URL::to('');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = BasicInfo::first();
        if (!$data) {
            return response()->json(['message' => 'Not content found'], 404);
        }

        $info = (object) [
            'name' => $data->name,
            'information' => $data->information,
            'image' => $this->rootUrl() . '/images/' . $data->image,
        ];
        return response()->json($info, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'information' => 'required',
        ]);

        $data = new BasicInfo();
        $data->name = $request->name;
        $data->information = $request->information;

        $info = BasicInfo::first();
        if (!$info) {
            $data->save();

            return response()->json([
                'status' => true,
                'message' => 'Successfully basic info added.',
            ], 200);
        }

        $data->update();
        return response()->json([
            'status' => true,
            'message' => 'Successfully basic info updated.',
        ], 200);
    }

    public function updateImage(Request $request)
    {
        $data = new BasicInfo();
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $fileName = time() . '.' . $extension;
        $file->move('images', $fileName);
        $data->image = $fileName;

        $info = BasicInfo::first();
        if (!$info) {
            $data->save();
            return response()->json([
                'status' => true,
                'message' => 'Successfully image uploaded.',
            ], 200);
        }

        $data->update();
        return response()->json([
            'status' => true,
            'message' => 'Successfully image updated.',
        ], 200);
    }
}
