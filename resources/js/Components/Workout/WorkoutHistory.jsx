import React from 'react';

const WorkoutHistory = ({ workouts }) => {

    console.log(workouts);
    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th colSpan="2">Squat</th>
                <th colSpan="2">Bench Press</th>
                <th colSpan="2">Deadlift</th>
            </tr>
            <tr>
                <th>Date</th>
                <th>Reps</th>
                <th>Kg</th>
                <th>Reps</th>
                <th>Kg</th>
                <th>Reps</th>
                <th>Kg</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
};

export default WorkoutHistory;
