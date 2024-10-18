import React, {useState} from "react";
import {useForm} from "@inertiajs/react";
import PopInLayout from "../../Layouts/PopInLayout.jsx";

const SetPR = ({handleClose, user}) => {

    const [exercise, setExercise] = useState("");

    const { data, setData, post, processing } = useForm({
        userId: user.id,
        name : exercise,
        weight: 0,
        repetitions: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('set.store'));
        setExercise("");
    };

    const handleSelection = (name) => {
        setExercise(name);
        setData('name', name);
    }

    return(
        <PopInLayout handleClose={handleClose}>
            <h2>Performance ?</h2>
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
                        <input type="hidden" id="name" name="name" value={data.name}/>
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={data.weight}
                                autoComplete="weight"
                                onChange={(e) => setData('weight', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="repetitions">Reps</label>
                            <input
                                type="number"
                                id="repetitions"
                                name="repetitions"
                                value={data.repetitions}
                                autoComplete="repetitions"
                                onChange={(e) => setData('repetitions', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button disabled={processing} type="submit">Nouveau PR</button>
                        </div>
                    </div>
                </form>
                }
</PopInLayout>
)
    ;
}

export default SetPR;
