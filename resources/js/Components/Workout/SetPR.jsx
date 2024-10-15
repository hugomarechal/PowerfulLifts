import React from "react";
import {useForm} from "@inertiajs/react";

const SetPR = ({exercise, workoutId, setExercise}) => {

    const { data, setData, post, processing } = useForm({
        weight: '',
        repetitions: '',
        name : exercise,
        workoutId: workoutId
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('set.store'));
        setExercise(null);
    };

    return(
        <div>
            <h2>Performance ?</h2>
            <form onSubmit={submit}>
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
            </form>
        </div>
    );
}

export default SetPR;
