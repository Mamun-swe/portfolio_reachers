<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

<<<<<<< HEAD
Route::get('/', function () {
    return response()->json('You are looking wrong way');
});
=======
Route::get('/', 'AppController@Index');
>>>>>>> 7788bc14526b0925307cc46283fbcf34716a1112
