import React, {useState} from "react";
import Modal from "../Misc/Modal.jsx";
import instance from "../../utils/axiosConfig.js";

const SetBodyweight = ({handleClose, user}) => {

    const [bodyweight, setBodyweight] = useState('');

    const submit = (e) => {
        e.preventDefault();
        instance.post('/current-bodyweight', {
            userId: user.id,
            bodyweight
        })
            .then(response => {
                response.status === 200 && alert("Nouveau poids de corps enregistré !");
                handleClose();
            })
            .catch(err => console.error(err))
    };

    return(
        <Modal handleClose={handleClose}>
                <form onSubmit={submit}>
                    <h3>Nouvelle pesée</h3>
                    <div>
                        <div className={'input_container'}>
                            <label htmlFor="bodyweight">Mon poids</label>
                            <input
                                type="number"
                                id="bodyweight"
                                name="bodyweight"
                                value={bodyweight}
                                autoComplete="bodyweight"
                                onChange={(e) => setBodyweight(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Nouvelle pesée</button>
                        </div>
                    </div>
                </form>
        </Modal>
    )
        ;
}

export default SetBodyweight;
