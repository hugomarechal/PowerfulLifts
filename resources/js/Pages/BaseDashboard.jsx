import React, {useState} from 'react';
import {Link} from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import WorkoutHistory from "../Components/Workout/WorkoutHistory.jsx";

const BaseDashboard = ({user}) => {

    const [isDisplayed, setIsDisplayed] = useState('history');

    const displayContent = () => {
        switch (isDisplayed) {
            case 'profile':
                return 'content';

            case 'history':
                return <WorkoutHistory user={user}/>;

            case 'settings':
                return 'content';

            case 'newWorkout':
                return 'content';

            default:
                return 'content';
        }
    }

    return (
        <DashboardLayout>
            <h1>Hello {user.name}, Welcome to your Powerlifting Dashboard</h1>
            <Link method='post' as='button' href={route('logout')}>Logout</Link>
            <div>
                <button onClick={() => setIsDisplayed('overview')}>Consulter Profil</button>
                <Link href={route('new-workout')} as='button'>Nouvel entrainement</Link>
                <Link href={route('workout-list')} as='button'>Tous les entrainement</Link>
                <Link href={route('settings')} as='button'>Paramètres</Link>
            </div>
            {displayContent()}
        </DashboardLayout>
    );
};

export default BaseDashboard;
