import React from "react";
import {Link} from "@inertiajs/react";

const DashboardLayout = ({children}) => {

    return(
        <>
            <nav>
                <Link href={route('dashboard')} as='button'>Home</Link>
                <Link href={route('personal-records.show')} as='button'>Tableau des PR</Link>
                {/*éventuellement rajouter "voir tous mes entrainements"*/}
                <Link href={route('settings')} as='button'>Paramètres</Link>
            </nav>
            {children}
        </>
    )
}

export default DashboardLayout;
