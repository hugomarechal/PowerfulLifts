import React from "react";
import './Navbar.scss';
import {useNavigate} from "react-router-dom";
import instance from "../../utils/axiosConfig.js";

const Navbar = ({currentTab, setCurrentTab}) => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await instance.post('/logout')
            console.log('Logout OK : ' + response.data);
            navigate('/');
        } catch (err) {
            console.error('Error :' + err)
        }
    }

    return(
        <nav>
            <button onClick={() => setCurrentTab('dashboard')}>Accueil</button>
            <button onClick={() => setCurrentTab('personalRecords')}>Records</button>
            <button onClick={() => handleLogout()}>Logout</button>
        </nav>
    )
}

export default Navbar;