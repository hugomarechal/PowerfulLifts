import React, {useState} from "react";
import NameEditForm from "../Components/Settings/NameEditForm.jsx";
import DeleteAccountPopIn from "../Components/Settings/DeleteAccountPopin.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import {Link} from "@inertiajs/react";

const Settings = ({user}) => {

    const [isNameFormVisible, setIsNameFormVisible] = useState(false);
    const [isPopInVisible, setIsPopInVisible] = useState(false);
    function getNameEditForm(type) {
        setIsNameFormVisible(true);
    }

    function deleteAccount() {
        setIsPopInVisible(true);
    }

    const handleClose = () => {
        setIsPopInVisible(false);
        setIsNameFormVisible(false);
    }

    return(
        <DashboardLayout>
            <div className={'main-container settings'}>
                <h2>Que voulez vous faire ?</h2>
                <button onClick={() => getNameEditForm()}>Changer de nom d'utilisateur</button>
                <button onClick={() => getProfileEditForm('password')}>Changer de mot de passe</button>
                <button onClick={() => deleteAccount()}>Supprimer mon compte</button>
                <Link method='post' as='button' href={route('logout')}>Logout</Link>

            </div>
            {
                isNameFormVisible && <NameEditForm user={user} handleClose={handleClose}/>
            }
            {
                isPopInVisible && <DeleteAccountPopIn user={user} setIsPopInVisible={setIsPopInVisible} handleClose={handleClose}/>
            }
        </DashboardLayout>
    )
}

export default Settings;
