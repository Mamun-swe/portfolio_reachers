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

    public function index()
    {
        $data = BasicInfo::first();
        if (!$data) {
            return response()->json(['message' => 'Not content found'], 404);
        }

        $info = (object) [
            'name' => $data->name,
            'information' => $data->information,
            'image' => $data->image ? $this->rootUrl() . '/images/' . $data->image : null,
        ];
        return response()->json($info, 200);
    }

    // Update image
    public function updateImage(Request $request)
    {
        $this->validate($request, [
            'image' => 'required',
        ]);

        // Find document from server
        $info = BasicInfo::where('id', 1)->first();

        // Check if available or not
        if (!$info) {
            // if image got into server
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;

                // Move image to destination
                $file->move('images', $filename);
                $form_data = array(
                    'image' => $filename,
                );

                // Update into server
                BasicInfo::create($form_data);
                return response()->json([
                    'status' => true,
                    'message' => 'Successfully image uploaded',
                ], 200);
            }
        }

        // if image got into server
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;

            if ($info->image) {
                // Remove old file from upload destination
                $old_image = public_path() . '/images/' . $info->image;
                unlink($old_image);
            }

            // Move image to destination
            $file->move('images', $filename);
            $form_data = array(
                'image' => $filename,
            );

            // Update into server
            $info->update($form_data);
            return response()->json([
                'status' => true,
                'message' => 'Successfully image updated',
            ], 200);
        }

    }

    public function updateInfo(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'information' => 'required',
        ]);

        // Find document from server
        $info = BasicInfo::where('id', 1)->first();

        // if info not found
        if (!$info) {
            $form_data = array(
                'name' => $request->name,
                'information' => $request->information,
            );

            // Update into server
            BasicInfo::create($form_data);
            return response()->json([
                'status' => true,
                'message' => 'Successfully basic info added',
            ], 200);
        }

        // if info available
        $form_data = array(
            'name' => $request->name,
            'information' => $request->information,
        );

        // Update into server
        $info->update($form_data);
        return response()->json([
            'status' => true,
            'message' => 'Successfully info updated',
        ], 200);

    }

}
