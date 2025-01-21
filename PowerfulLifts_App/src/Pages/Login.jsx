import React, {useState} from "react";
import axios from "axios";
import instance from "../utils/axiosConfig.js";
import Modal from "../Components/Misc/Modal.jsx";
import {useNavigate} from "react-router-dom";

const Login = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {

            await axios.get('/sanctum/csrf-cookie');
            const attempt = await instance.post('/login', {email, password})
            console.log('Login OK : ' + attempt.data);
            handleClose();
            navigate('/dashboard');
        } catch (err) {
            setErrors(err.response.data);
            console.error('Error ' + err)
        }
    };

    return (
        <Modal handleClose={handleClose}>
            <h1>Connexion</h1>
            <form onSubmit={submit}>
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
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword( e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Connexion</button>
                {errors.message && <span>{errors.message}</span>}
            </form>
        </Modal>
    );
}

export default Login;
