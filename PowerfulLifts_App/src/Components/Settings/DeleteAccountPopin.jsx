import React, {useState} from 'react';
import Modal from "../Misc/Modal.jsx";

const DeleteAccountPopIn = ({user, handleClose}) => {

    /*const deleteUser = (id) => {
        Inertia.delete(route('user.destroy', id), {
        onSuccess: () => alert('Votre compte a été supprimé')
        })
        handleClose();
    }*/

    return (
        <Modal handleClose={handleClose}>
            <h2>Êtes vous certain(e) de vouloir supprimer votre compte ? Cette action est irréversible.</h2>
            <div>
                {/*<button className={'danger'} onClick={() => deleteUser(user.id)}>Supprimer</button>*/}
                <button className={'cancel'} onClick={handleClose}>Annuler</button>
            </div>
        </Modal>
    );
};

export default DeleteAccountPopIn;
