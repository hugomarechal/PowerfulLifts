import React, {useState} from "react";
import Modal from "../Misc/Modal.jsx";
import instance from "../../utils/axiosConfig.js";

const SetPR = ({handleClose, user}) => {

    const [exercise, setExercise] = useState("");
    const [name, setName] = useState();
    const [repetitions, setRepetitions] = useState();
    const [weight, setWeight] = useState();



    const submit = (e) => {
        e.preventDefault();
        instance.post('/set', {
            userId: user.id,
            name,
            repetitions,
            weight
        })
        .then(response => {
            response.status === 200 && alert("Nouveau PR enregistré !");
            handleClose();
        })
        .catch(err => console.error(err))

        setExercise("");
    };

    const handleSelection = (name) => {
        setExercise(name);
        setName(name);
    }

    return(
        <Modal handleClose={handleClose}>
                <div>
                    <h3>Sélectionnez un exercice :</h3>
                    <button onClick={() => handleSelection("Squat")}>Squat</button>
                    <button onClick={() => handleSelection("Bench Press")}>Bench Press</button>
                    <button onClick={() => handleSelection("Deadlift")}>Deadlift</button>
                </div>
                {exercise !== "" &&
                <form onSubmit={submit}>
                    <h3>Nouveau PR - {exercise}</h3>
                    <div>
                        <input type="hidden" id="name" name="name" value={name}/>
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
                        <button type="submit">Nouveau PR</button>
                        </div>
                    </div>
                </form>
                }
</Modal>
)
    ;
}

export default SetPR;
