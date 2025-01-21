import React, {useEffect, useState} from 'react';
import SetPR from "../Components/Workout/SetPR.jsx";
import instance from "../utils/axiosConfig.js";
import SetBodyweight from "../Components/Workout/SetBodyweight.jsx";
import '../assets/styles/Dashboards.scss';

const BaseDashboard = ({user, records, getUserData}) => {
    const [isPRFormVisible, setIsPRFormVisible] = useState(false);
    const [isWeighingFormVisible, setIsWeighingFormVisible] = useState(false);
    const [bodyweight, setBodyweight] = useState();
    const [allBodyweight, setAllBodyweight] = useState([]);

    const getCurrentBodyweight = async () => {
        try {
            const response = await instance.get('/current-bodyweight');
            console.log(response.data.allBodyweight);
            setBodyweight(response.data.currentBodyweight.bodyweight);
            setAllBodyweight(response.data.allBodyweight);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCurrentBodyweight();
    }, []);

    const handleClose = () => {
        setIsPRFormVisible(false);
        setIsWeighingFormVisible(false);
        getUserData();
        getCurrentBodyweight();
    }
    return (
        <>
            <h2>Bonjour {user.name}</h2>
            <div className='widgets-container'>
                <div className="exercises-container">
                    <h4>Meilleurs performances du moment :</h4>
                    <div className="exercise">
                        <p>Squat</p>
                        <p className={'score'}> {records.squat ? records.squat.weight : 0}kg
                            ({records.squat ? records.squat.repetitions : 0}RM)</p>
                    </div>
                    <div className="exercise">
                        <p>Bench</p>
                        <p className={'score'}>{records.bench ? records.bench.weight : 0}kg
                            ({records.squat ? records.squat.repetitions : 0}RM)</p>
                    </div>
                    <div className="exercise">
                        <p>Deadlift</p>
                        <p className={'score'}>{records.deadlift ? records.deadlift.weight : 0}kg
                            ({records.squat ? records.squat.repetitions : 0}RM)</p>
                    </div>
                </div>
                <div className="sub-container">
                    <div className="widget-container">
                        <div className="widget">
                            <h4>Force Totale</h4>
                            {(records.squat ? records.squat.weight : 0)
                                + (records.bench ? records.bench.weight : 0)
                                + (records.deadlift ? records.deadlift.weight : 0)}kg
                        </div>
                        <div className="widget">
                            <h4>Poids</h4>
                            {bodyweight}kg
                        </div>
                    </div>
                    <div className="btn-container">
                        <button onClick={() => setIsPRFormVisible(true)}>Enregistrer un PR</button>
                        <button onClick={() => setIsWeighingFormVisible(true)}>Se peser</button>
                    </div>
                </div>
                <div className="weigth-table-container">
                    <table className="weigth-table">
                        <thead>
                        <tr>
                            <th colSpan={4}>
                                <h4>Évolution du poids</h4>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allBodyweight.map(weighing => (
                                <tr>
                                    <td>{weighing.bodyweight}kg</td>
                                    <td>{new Date(weighing.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            {isPRFormVisible && <SetPR handleClose={handleClose} user={user}/>}
            {isWeighingFormVisible && <SetBodyweight handleClose={handleClose} user={user}/>}
        </>
    );
};

export default BaseDashboard;