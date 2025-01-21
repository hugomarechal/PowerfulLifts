import React, {useEffect, useState} from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import BaseDashboard from "../../Pages/BaseDashboard.jsx";
import Settings from "../../Pages/Settings.jsx";
import PersonalRecordsTable from "../../Pages/PersonalRecordsTable.jsx";
import instance from "../../utils/axiosConfig.js";
import '../../assets/styles/Dashboards.scss'

const DashboardLayout = () => {

    const [user, setUser] = useState({});
    const [records, setRecords] = useState({});
    const [currentTab, setCurrentTab] = useState('dashboard');

    const getUserData = async () => {
        try {
            const response = await instance.get('/dashboard');
            setUser(response.data.user);
            setRecords(response.data.records);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getUserData()
    }, []);

    const displayCurrentTab = (currentTab) => {
        switch (currentTab) {
            case 'dashboard':
                return <BaseDashboard user={user} records={records} getUserData={getUserData}/>;

            case 'personalRecords':
                return <PersonalRecordsTable/>;

            case 'settings':
                return <Settings user={user}/>;
        }
    }

    return(
        <div className="main-container">
            <Header/>
            {displayCurrentTab(currentTab)}
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        </div>
    )
}

export default DashboardLayout;