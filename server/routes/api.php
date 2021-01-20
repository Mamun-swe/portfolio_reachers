<?php

use Illuminate\Support\Facades\Route;

// Admin API's
Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::apiResource('year', 'App\Http\Controllers\Api\Admin\YearController');
    Route::apiResource('publication', 'App\Http\Controllers\Api\Admin\PublicationController');
});
