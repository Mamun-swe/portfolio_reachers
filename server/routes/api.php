<?php

use Illuminate\Support\Facades\Route;

// Admin API's
Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::apiResource('year', 'App\Http\Controllers\Api\Admin\YearController');
    Route::get('info/index', 'App\Http\Controllers\Api\Admin\BasicInfoController@index')->name('info.index');
    Route::post('update/image', 'App\Http\Controllers\Api\Admin\BasicInfoController@updateImage')->name('info.update.image');
    Route::post('update/info', 'App\Http\Controllers\Api\Admin\BasicInfoController@updateInfo')->name('info.update');
    Route::apiResource('publication', 'App\Http\Controllers\Api\Admin\PublicationController');
});
