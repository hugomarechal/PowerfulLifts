import React from "react";
import {Link} from "@inertiajs/react";

const DashboardLayout = ({children}) => {

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
            </nav>
        </body>
    )
}

export default DashboardLayout;
