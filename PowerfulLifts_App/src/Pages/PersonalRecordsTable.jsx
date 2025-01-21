import React, {useEffect, useState} from 'react';
import UpdatePR from "../Components/Workout/UpdatePR.jsx";
import instance from "../utils/axiosConfig.js";
import '../assets/styles/Dashboards.scss';

const PersonalRecordsTable = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [exercises, setExercises] = useState({
        squats: [],
        benches: [],
        deadlifts: [],
    });
    const [currentExercise, setCurrentExercise] = useState(null);

    function updatePR(exercise) {
        setCurrentExercise(exercise);
        setIsVisible(true)
    }

    const getUserPRs = async () => {
        try {
            const response = await instance.get('/personal-records');
            setExercises({
                squats: response.data.squats,
                benches: response.data.benches,
                deadlifts: response.data.deadlifts,
            })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getUserPRs();
    }, []);

    const handleClose = () => {
        setCurrentExercise(null);
        setIsVisible(false);
        getUserPRs();
    }

    const PRTable = ({exerciseType}) => {

        return (
            <table>
                <thead>
                <tr>
                    <th className={'table-title'}>{exerciseType[0].name === 'Bench Press' ? 'Bench' : exerciseType[0].name}</th>
                </tr>
                <tr>
                    <th>Reps max</th>
                    <th>Charge</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    exerciseType.map((exercise) => (
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
        <>
            {isVisible && <UpdatePR handleClose={handleClose} exercise={currentExercise}/>}
            <h1>PR Récap</h1>
            <div className="tables-container">
            {exercises.squats.length > 0 && <PRTable exerciseType={exercises.squats}/>}
            {exercises.benches.length > 0 && <PRTable exerciseType={exercises.benches}/>}
            {exercises.deadlifts.length > 0 && <PRTable exerciseType={exercises.deadlifts}/>}
            </div>
        </>
    );
};

export default PersonalRecordsTable;
