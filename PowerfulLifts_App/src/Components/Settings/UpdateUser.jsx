import React, {useState} from "react";
import Modal from "../Misc/Modal.jsx";
import instance from "../../utils/axiosConfig.js";

const UpdateUser = ({handleClose, user}) => {


    const [name, setName] = useState(user.name);

    const submit = (e) => {
        e.preventDefault();
        instance.put(`/admin/${user.id}`, {
            name,
        })
            .then(response => {
                response.status === 200 && alert("Utilisateur modifié !");
                handleClose();
            })
            .catch(err => console.error(err))


    };

    return(
        <Modal handleClose={handleClose}>
            <form onSubmit={submit}>
                <h3>Modifier les infos de {user.name}</h3>
                <div className={"input_container white_input"}>
                    <label htmlFor="name">Nom</label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        autoComplete="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Modifier</button>
                    <button className={'cancel'} onClick={handleClose}>Annuler</button>
                </div>
            </form>
        </Modal>
    );
}

export default UpdateUser;
