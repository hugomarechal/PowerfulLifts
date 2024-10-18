import React, {useState} from "react";
import ProfileEditForm from "../Components/Settings/ProfileEditForm.jsx";
import DeleteAccountPopIn from "../Components/Settings/DeleteAccountPopin.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import {Link} from "@inertiajs/react";

const Settings = ({user}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formType, setFormType] = useState(null);
    const [isPopInVisible, setIsPopInVisible] = useState(false);
    function getProfileEditForm(type) {
        setFormType(type);
        setIsFormVisible(true);
    }

    function deleteAccount() {
        setIsPopInVisible(true);
    }

    const handleClose = () => {
        setIsPopInVisible(false);
        setIsFormVisible(false);
        setFormType(null);
    }

    return(
        <DashboardLayout>
            <div>
                <h1>Que voulez vous faire ?</h1>
                <button onClick={() => getProfileEditForm('name')}>Changer de nom d'utilisateur</button>
                <button onClick={() => getProfileEditForm('password')}>Changer de mot de passe</button>
                <button onClick={() => deleteAccount()}>Supprimer mon compte</button>
                <Link method='post' as='button' href={route('logout')}>Logout</Link>

            </div>
            {
                isFormVisible && <ProfileEditForm user={user} type={formType} setIsFormVisible={setIsFormVisible} handleClose={handleClose}/>
            }
            {
                isPopInVisible && <DeleteAccountPopIn user={user} setIsPopInVisible={setIsPopInVisible} handleClose={handleClose}/>
            }
        </DashboardLayout>
    )
}

export default Settings;
