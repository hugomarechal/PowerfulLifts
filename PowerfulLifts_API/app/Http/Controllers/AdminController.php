<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function getAllUsers()
    {
        $users = DB::table('users')->orderBy('created_at', 'desc')->get();
        return response()-> json(['users' => $users]);
    }

    public function store (SignUpRequest $request)
    {
        $request->validated();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json([
            'message' => 'Nouvel utilisateur créé !.'
        ]);
    }

    public function update(Request $request, $id)
    {
        User::findOrFail($id)->update(
            $request->validate([
                'name' => ['required', 'string', 'min:2', 'max:30'],
            ])
        );

        return response()-> json(["message" => "Utilisateur modifié !"]);
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return response()->json(['Message' => 'Utilisateur supprimé !']);
    }
}
