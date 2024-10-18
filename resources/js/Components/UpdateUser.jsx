import React from "react";
import {useForm} from "@inertiajs/react";
import PopInLayout from "../Layouts/PopInLayout.jsx";

const UpdatePR = ({handleClose, user}) => {

    const { data, setData, put, processing } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('admin.update', {id: user.id}));
        handleClose();
    };

    return(
        <PopInLayout handleClose={handleClose}>
            <form onSubmit={submit}>
                <h3>Modifier les infos de {user.name}</h3>
                <div className={"input_container white_input"}>
                    <label htmlFor="name">Nom</label>
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                </div>
                <div className={"input_container white_input"}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button disabled={processing} type="submit">Modifier</button>
                    <button disabled={processing} className={'cancel'} onClick={handleClose}>Annuler</button>
                </div>
            </form>
        </PopInLayout>
    );
}

export default UpdatePR;
