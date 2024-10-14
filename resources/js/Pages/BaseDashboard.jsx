import React from 'react';
import {Link} from "@inertiajs/react";

const BaseDashboard = () => {

    return (
        <div>
            <h1>Hello Base, Welcome to your Powerlifting Dashboard</h1>
            <Link method='post' as='button' href={route('logout')}>Logout</Link>
        </div>
    );
};

export default BaseDashboard;
