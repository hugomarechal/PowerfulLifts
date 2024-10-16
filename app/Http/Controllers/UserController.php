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
    public function signup(SignUpRequest $request)
    {
        $request->validated();

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return redirect(route('login'));
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return redirect('dashboard');
        }

        return back()->withErrors([
            'email' => "L'email ou le mot de passe sont incorrects, veuillez réessayer.",
        ]);

    }


    public function getSettings()
    {
        return Inertia::render('Settings', [
            'user' => auth()->user(),
        ]);    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/dashboard');
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
