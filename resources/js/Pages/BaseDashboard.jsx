import React, {useState} from 'react';
import {Link} from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import SetPR from "../Components/Workout/SetPR.jsx";

const BaseDashboard = ({user, records}) => {

    const [isPopInOpen, setIsPopInOpen] = useState(false);

    const handleClose = () => {
        setIsPopInOpen(false);
    }

    return (
        <DashboardLayout>
            <h1>Bonjour {user.name}</h1>
            <div>
                <h2>Records Personnels</h2>
                <div>Total théorique:
                    {(records.squat ? records.squat.weight : 0)
                    + (records.bench ? records.bench.weight : 0)
                    + (records.deadlift ? records.deadlift.weight : 0)}kg
                </div>
                <div>Squat: {records.squat ? records.squat.weight : 0}kg ({records.squat ? records.squat.repetitions : 0}RM)</div>
                <div>Bench: {records.bench ? records.bench.weight : 0}kg ({records.bench ? records.bench.repetitions : 0}RM)</div>
                <div>Deadlift: {records.deadlift ? records.deadlift.weight : 0}kg ({records.deadlift ? records.deadlift.repetitions : 0}RM)</div>
            </div>
            <button onClick={() => setIsPopInOpen(true)}>Enregistrer un PR</button>
            {isPopInOpen && <SetPR handleClose={handleClose} user={user}/>}
        </DashboardLayout>
    );
};

export default BaseDashboard;
