import React, {useState} from 'react';
import Modal from "../Misc/Modal.jsx";

const ProfileEditForm = ({handleClose, user}) => {

    const [name, setName] = useState(user.name);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

    const submit = (e) => {
        e.preventDefault();

        handleClose();
    }

    return (
        <Modal handleClose={handleClose}>
            <form onSubmit={submit}>
                <div className={'input_container'}>
                    <label htmlFor="name">Nom d'utilisateur</label>
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
                    <label htmlFor="currentPassword">Mot de passe actuel</label>
                    <input
                        type='password'
                        id='currentPassword'
                        name='currentPassword'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="newPassword">Nouveau mot de passe</label>
                    <input
                        type='password'
                        id='newPassword'
                        name='newPassword'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="newPasswordConfirmation">Confirmer le nouveau mot de passe</label>
                    <input
                        type='password'
                        id='newPasswordConfirmation'
                        name='newPasswordConfirmation'
                        value={newPasswordConfirmation}
                        onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                        required
                    />
                </div>
                <div className={'input_container'}>
                    <button>
                        Modifier
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ProfileEditForm;
