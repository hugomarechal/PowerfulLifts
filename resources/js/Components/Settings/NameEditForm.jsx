import React from 'react';
import PopInLayout from "../../Layouts/PopInLayout.jsx";
import {useForm} from "@inertiajs/react";

const NameEditForm = ({handleClose, user}) => {

    const {data, setData, put, processing} = useForm({
        name: user.name,
    })
    const submit = (e) => {
        e.preventDefault();

        put(route('name.update', {id: user.id}));
        handleClose();
    }

    return (
        <PopInLayout handleClose={handleClose}>
            <form onSubmit={submit}>
                <div className={'input_container'}>
                    <label htmlFor="formerName">Nom actuel</label>
                    <input
                        id="formerName"
                        name="formerName"
                        value={user.name}
                        disabled
                    />
                </div>
                <div className={'input_container'}>
                    <label htmlFor="name">Nouveau nom</label>
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                </div>
                <div className={'input_container'}>
                    <button disabled={processing}>
                        Modifier le nom d'utilisateur
                    </button>
                </div>
            </form>
        </PopInLayout>
    );
};

export default NameEditForm;
