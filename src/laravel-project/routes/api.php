<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudyRecordController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

// });

Route::middleware('auth:sanctum')->group(function () {
    //認証を必要とする機能
    //Route::apiResource('/users', UserController::class);
    //Route::apiResource('/studyrecords', StudyRecordController::class);
});

Route::post('/login', LoginController::class)->name('login');
Route::post('/logout', LogoutController::class)->name('logout');
Route::apiResource('/users', UserController::class);
Route::apiResource('/studyrecords', StudyRecordController::class);