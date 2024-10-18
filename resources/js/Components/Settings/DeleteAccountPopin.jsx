import React, {useState} from 'react';
import PopInLayout from "../../Layouts/PopInLayout.jsx";
import {Inertia} from "@inertiajs/inertia";

const DeleteAccountPopIn = ({user, handleClose}) => {

    const deleteUser = (id) => {
        Inertia.delete(route('user.destroy', id), {
        onSuccess: () => alert('Votre compte a été supprimé')
        })
        handleClose();
    }

    return (
        <PopInLayout handleClose={handleClose}>
            <h2>Êtes vous certain(e) de vouloir supprimer votre compte ? Cette action est irréversible.</h2>
            <div>
                <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                <button onClick={handleClose}>Annuler</button>
            </div>
        </PopInLayout>
    );
};

export default DeleteAccountPopIn;
