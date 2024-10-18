import React, {useEffect} from "react";
import {Link, useForm} from "@inertiajs/react";
import AuthLayout from "../Layouts/AuthLayout.jsx";

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <AuthLayout>
            <h1>Connexion</h1>
            <form onSubmit={submit}>
                <div className={"input_container white_input"}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <a href={route('password.request')}>Mot de passe oublié ?</a>
                </div>
                <button disabled={processing} type="submit">Connexion</button>
                <Link href={route('signup')} as={'button'}>Créer un compte</Link>
            </form>
        </AuthLayout>
    );
}

export default Login;
