import React, {useState} from 'react';
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import UpdatePR from "../Components/Workout/UpdatePR.jsx";

const PersonalRecordsTable = ({ squats, benches, deadlifts }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(null);

    function updatePR(exercise) {
        setCurrentExercise(exercise);
        setIsVisible(true)
    }

    const handleClose = () => {
        setCurrentExercise(null);
        setIsVisible(false);
    }

    const PRTable = ({exercises}) => {

        return (
            <table>
                <thead>
                <tr>
                    <p className={'table-title'}>{exercises[0].name === 'Bench Press' ? 'Bench' : exercises[0].name}</p>
                </tr>
                <tr>
                    <th>Reps max</th>
                    <th>Charge</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    exercises.map((exercise) => (
                        <tr key={exercise.id}>
                            <td>{exercise.repetitions}</td>
                            <td>{exercise.weight}</td>
                            <td>{new Date(exercise.created_at).toLocaleDateString()}</td>
                            <td><button onClick={() => updatePR(exercise)}>Modifier</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
    return (
        <DashboardLayout>
            {isVisible && <UpdatePR handleClose={handleClose} exercise={currentExercise}/>}
            <h1>PR Récap</h1>
            <PRTable exercises={squats}/>
            <PRTable exercises={benches}/>
            <PRTable exercises={deadlifts}/>
        </DashboardLayout>
    );
};

export default PersonalRecordsTable;
