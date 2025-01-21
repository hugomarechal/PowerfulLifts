<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class UserController extends Controller
{

    public function getCurrentUser() {
        $user = auth()->user();

        return response()->json($user);
    }

    public function signup(SignUpRequest $request)
    {
        $request->validated();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        Auth::login($user);

        return response()->json([
            'message' => 'Votre compte a été créé.',
            'user' => auth()->user()
        ]);
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return response()->json([
                'message' => 'Vous êtes connectés.',
                'user' => auth()->user()
            ], 200);
        }

        return response()->json([
            'message' => 'L\'email ou le mot de passe sont incorrects, veuillez réessayer.'
        ], 401);

    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function updateName(Request $request, $id)
    {
        User::findOrFail($id)->update(
            $request->validate([
                'name' => ['required', 'string', 'min:2', 'max:30'],
            ])
        );

        return back();

    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return redirect()->route('landing');
    }
}
