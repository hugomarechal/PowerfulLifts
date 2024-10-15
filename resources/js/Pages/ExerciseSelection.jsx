import React, {useState} from "react";
import SetPR from "../Components/Workout/SetPR.jsx";
import {Link} from "@inertiajs/react";

const ExerciseSelection = ({workoutId}) => {

    const [exercise, setExercise] = useState(null);
    return(
        <div>
            <h1>New Workout</h1>
            <h2>Quel exercice veux-tu renseigner ?</h2>
            <Link href={route('end-workout')} method='patch' as='button'>Fin de l'entrainement</Link>
            <div>
                <button onClick={() => setExercise('Squat')}>Squat</button>
                <button onClick={() => setExercise('Bench Press')}>Développé Couché</button>
                <button onClick={() => setExercise('Deadlift')}>Soulevé de Terre</button>
            </div>
            {exercise !== null && <SetPR exercise={exercise} workoutId={workoutId} setExercise={setExercise}/>}
        </div>
    );
}

export default ExerciseSelection;
