import React, {useState} from "react";
import Modal from "../Misc/Modal.jsx";
import instance from "../../utils/axiosConfig.js";

const UpdatePR = ({handleClose, exercise}) => {

    const [weight, setWeight] = useState(exercise.weight);
    const [repetitions, setRepetitions] = useState(exercise.repetitions);

    const submit = (e) => {
        e.preventDefault();
        instance.put(`/set/${exercise.id}`, {
            repetitions,
            weight
        })
            .then(response => {
                response.status === 200 && alert("PR modifié !");
            })
            .catch(err => console.error(err))

        handleClose();
    };

    return(
        <Modal handleClose={handleClose}>
            <h2>Modifier un PR</h2>
                <form onSubmit={submit}>
                    <h3>PR du {new Date(exercise.created_at).toLocaleDateString()}</h3>
                    <div>
                        <div className={'input_container'}>
                            <label htmlFor="weight">Charge</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={weight}
                                autoComplete="weight"
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>

                        <div className={'input_container'}>
                            <label htmlFor="repetitions">Reps</label>
                            <input
                                type="number"
                                id="repetitions"
                                name="repetitions"
                                value={repetitions}
                                autoComplete="repetitions"
                                onChange={(e) => setRepetitions(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Modifier PR</button>
                        </div>
                    </div>
                </form>
        </Modal>
    );
}

export default UpdatePR;
