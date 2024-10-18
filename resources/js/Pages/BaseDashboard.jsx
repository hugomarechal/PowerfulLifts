import React, {useState} from 'react';
import {Link} from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";

const BaseDashboard = ({user}) => {

    return (
        <DashboardLayout>
            <h1>Hello {user.name}, Welcome to your Powerlifting Dashboard</h1>
            <Link method='post' as='button' href={route('logout')}>Logout</Link>

        </DashboardLayout>
    );
};

export default BaseDashboard;
