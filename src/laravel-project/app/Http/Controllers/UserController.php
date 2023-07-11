<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    # 全件取得
  public function index()
  {
    $users = User::all();
    return response()->json($users);
  }

  public function show(Int $id)
  {
    $post = User::find($id);
    return response()->json($post);
  }
}