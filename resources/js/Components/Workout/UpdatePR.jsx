import React from "react";
import {useForm} from "@inertiajs/react";
import PopInLayout from "../../Layouts/PopInLayout.jsx";

const UpdatePR = ({handleClose, exercise}) => {

    const { data, setData, put, processing } = useForm({
        weight: exercise.weight,
        repetitions: exercise.repetitions,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('set.update', {id: exercise.id}));
        handleClose();
    };

    return(
        <PopInLayout handleClose={handleClose}>
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
                                value={data.weight}
                                autoComplete="weight"
                                onChange={(e) => setData('weight', e.target.value)}
                                required
                            />
                        </div>

                        <div className={'input_container'}>
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
                            <button disabled={processing} type="submit">Modifier PR</button>
                        </div>
                    </div>
                </form>
        </PopInLayout>
    );
}

export default UpdatePR;
