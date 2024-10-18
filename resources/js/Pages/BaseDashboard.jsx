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
        <DashboardLayout user={user}>
            <div className='main-container'>
                <h2>Dashboard de {user.name}</h2>
                <div>
                    <div className="total">
                        <h4>Votre potentiel de force actuel est de :</h4>
                        <p>
                            {(records.squat ? records.squat.weight : 0)
                            + (records.bench ? records.bench.weight : 0)
                            + (records.deadlift ? records.deadlift.weight : 0)}kg
                        </p>
                    </div>
                    <h4>Meilleurs performances du moment :</h4>
                    <div className="exercises-container">
                        <div className="exercise">
                            <p>Squat</p>
                            <p className={'score'}> {records.squat ? records.squat.weight : 0}kg ({records.squat ? records.squat.repetitions : 0}RM)</p>
                        </div>
                        <div className="exercise">
                            <p>Bench</p>
                            <p className={'score'}>{records.bench ? records.bench.weight : 0}kg ({records.squat ? records.squat.repetitions : 0}RM)</p>
                        </div>
                        <div className="exercise">
                            <p>Deadlift</p>
                            <p className={'score'}>{records.deadlift ? records.deadlift.weight : 0}kg ({records.squat ? records.squat.repetitions : 0}RM)</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsPopInOpen(true)}>Enregistrer un PR</button>
                {isPopInOpen && <SetPR handleClose={handleClose} user={user}/>}
            </div>
        </DashboardLayout>
    );
};

export default BaseDashboard;
