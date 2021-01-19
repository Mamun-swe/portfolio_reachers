<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

<<<<<<< HEAD

// Admin API's
Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::apiResource('year', 'App\Http\Controllers\Api\Admin\YearController');
    Route::apiResource('publication', 'App\Http\Controllers\Api\Admin\PublicationController');
});
=======
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
>>>>>>> 7788bc14526b0925307cc46283fbcf34716a1112
