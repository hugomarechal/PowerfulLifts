import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import PopInLayout from "../Layouts/PopInLayout.jsx";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <PopInLayout>
            <Head title="Forgot Password" />

            <div>
                Vous avez oublié votre mot de passe ? Aucun problème. Veuillez saisir votre adresse mail et nous vous enverrons un lien pour le réinitialiser.
            </div>

            {status && <div>{status}</div>}

            <form onSubmit={submit}>
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

                <p>{errors.email}</p>

                <div>
                    <button
                        disabled={processing}>
                        Recevoir le lien par mail
                    </button>
                </div>
            </form>
        </PopInLayout>
    );
}
