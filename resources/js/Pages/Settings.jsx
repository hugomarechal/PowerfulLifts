import React, {useState} from "react";
import ProfileEditForm from "../Components/Settings/ProfileEditForm.jsx";
import DeleteAccountPopIn from "../Components/Settings/DeleteAccountPopin.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";

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

    return(
        <DashboardLayout>
            <div>
                <h1>Que voulez vous faire ?</h1>
                <button onClick={() => getProfileEditForm('name')}>Changer de nom d'utilisateur</button>
                <button onClick={() => getProfileEditForm('password')}>Changer de mot de passe</button>
                <button onClick={() => deleteAccount()}>Supprimer mon compte</button>
            </div>
            {
                isFormVisible && <ProfileEditForm type={formType} setIsFormVisible={setIsFormVisible}/>
            }
            {
                isPopInVisible && <DeleteAccountPopIn setIsPopInVisible={setIsPopInVisible()}/>
            }
        </DashboardLayout>
    )
}

export default Settings;
