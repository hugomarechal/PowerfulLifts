import React from 'react';
import { useEffect } from 'react';
import {Link, useForm} from "@inertiajs/react";
import AuthLayout from "../Layouts/AuthLayout.jsx";

const SignUp = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('signup'));
    };

    return (
        <AuthLayout>
            <h1>Inscription</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirmez le mot de passe</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button disabled={processing}>
                        SignUp
                    </button>
                    <Link href={route('login')} as={'button'}>J'ai déjà un compte</Link>
                </div>
            </form>
        </AuthLayout>
    );
}

export default SignUp;
