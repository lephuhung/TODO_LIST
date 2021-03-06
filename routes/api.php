<?php

use Illuminate\Http\Request;

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
/*USER AUTHENCATION */
Route::post('register', 'UserAuthencation@register');
Route::post('login', 'UserAuthencation@authenticate');
//Route::get('open', 'DataController@open');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserAuthencation@user');

});
/*
TODO CONTROLLER----------------------------------------------------
 */
Route::get('/todo', 'TodoController@GetData');
Route::post('/addtodo', 'TodoController@AddData');
Route::post('/deletetodo', 'TodoController@DeleteData');
Route::post('/updatetodo', 'TodoController@UpdateData');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
