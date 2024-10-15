import React from 'react';
import {Link} from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";

const BaseDashboard = ({user}) => {

    return (
        <DashboardLayout>
            <h1>Hello {user.name}, Welcome to your Powerlifting Dashboard</h1>
            <Link method='post' as='button' href={route('logout')}>Logout</Link>
            <div>
                <h2>Que faire ?</h2>
                <Link href={route} as='button'>Consulter Profil</Link>
                <Link href={route('new-workout')} as='button'>Nouvel entrainement</Link>
                <Link href={route} as='button'>Paramètres</Link>
            </div>
        </DashboardLayout>
    );
};

export default BaseDashboard;
