<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function getAdminDashboard()
    {
        $users = DB::table('users')->orderBy('created_at', 'desc')->get();
       return Inertia::render('AdminDashboard', ['users' => $users]);
    }

    public function update(Request $request, $id)
    {
        User::findOrFail($id)->update(
            $request->validate([
                'name' => ['required', 'string', 'min:2', 'max:30'],
                'email' => ['required', 'email', 'unique:users,email'],
            ])
        );

        return back();
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return redirect()->back();
    }
}
