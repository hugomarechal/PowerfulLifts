import React, {useState} from "react";
import ProfileEditForm from "../Components/Settings/ProfileEditForm.jsx";
import DeleteAccountPopIn from "../Components/Settings/DeleteAccountPopin.jsx";
import {useNavigate} from "react-router-dom";
import instance from "../utils/axiosConfig.js";
import '../assets/styles/Dashboards.scss';


const Settings = ({user}) => {

    const [isProfileFormVisible, setIsProfileFormVisible] = useState(false);
    const [isPopInVisible, setIsPopInVisible] = useState(false);
    function getProfileEditForm(type) {
        setIsProfileFormVisible(true);
    }

    function deleteAccount() {
        setIsPopInVisible(true);
    }

    const handleClose = () => {
        setIsPopInVisible(false);
        setIsProfileFormVisible(false);
    }

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
        <>
            <div className={'main-container settings'}>
                <h2>Que voulez vous faire ?</h2>
                <button onClick={() => getProfileEditForm()}>Modifier mes identifiants</button>
                <button onClick={() => deleteAccount()}>Supprimer mon compte</button>
                <button onClick={() => handleLogout()}>Logout</button>

            </div>
            {
                isProfileFormVisible && <ProfileEditForm user={user} handleClose={handleClose}/>
            }
            {
                isPopInVisible && <DeleteAccountPopIn user={user} setIsPopInVisible={setIsPopInVisible} handleClose={handleClose}/>
            }
        </>
    )
}

export default Settings;
