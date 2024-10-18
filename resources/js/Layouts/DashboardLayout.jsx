import React from "react";
import {Link} from "@inertiajs/react";

const DashboardLayout = ({children, user}) => {

    return(
        <body>
            <header className="header">
                <a href={route('dashboard')}><h1>Powerful Lifts</h1></a>
            </header>
            {children}
            <nav>
                <Link href={route('dashboard')} >Accueil</Link>
                <Link href={route('personal-records.show')}>Records</Link>
                <Link href={route('settings')}>Réglages</Link>
                {user && user.is_admin === 1 && <Link href={route('admin.dashboard')}>Admin</Link>}
            </nav>
        </body>
    )
}

export default DashboardLayout;
