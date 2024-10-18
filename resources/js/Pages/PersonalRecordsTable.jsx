import React from 'react';
import DashboardLayout from "../Layouts/DashboardLayout.jsx";

const PersonalRecordsTable = ({ squats, benches, deadlifts }) => {
    function updatePR() {

    }

    const PRTable = ({exercises}) => {
        return (
            <table>
                <thead>
                <tr>
                    <h2>{exercises[0].name}</h2>
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
                            <td><button onClick={updatePR}>Modifier</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
    return (
        <DashboardLayout>
            <h1>PR Récap</h1>
            <PRTable exercises={squats}/>
            <PRTable exercises={benches}/>
            <PRTable exercises={deadlifts}/>
        </DashboardLayout>
    );
};

export default PersonalRecordsTable;
