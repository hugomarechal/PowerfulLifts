import React, {useState} from 'react';
import { useEffect } from 'react';
import Modal from "../Components/Misc/Modal.jsx";
import axios from "axios";
import instance from "../utils/axiosConfig.js";
import {useNavigate} from "react-router-dom";

const SignUp = ({handleClose}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        return () => {
            setPassword('');
            setPasswordConfirmation('');
        };
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        try {

            await axios.get('/sanctum/csrf-cookie');
            const attempt = await instance.post('/signup', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            })
            console.log('Compté créé : ' + attempt.data);
            handleClose();
            navigate('/dashboard');

        } catch (error) {
            console.error('Error ' + error)
        }
    };

    return (
        <Modal handleClose={handleClose}>
            <h1>Créer un compte</h1>
            <form onSubmit={submit}>
                <div className={"input_container white_input"}>
                    <label htmlFor="name">Nom</label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        autoComplete="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="passwordConfirmation">Mot de passe</label>
                    <input
                        type='password'
                        id='passwordConfirmation'
                        name='passwordConfirmation'
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit">Connexion</button>
            </form>
        </Modal>
    )
}

export default SignUp;
