import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import instance from "../../utils/axiosConfig.js";
import AdminDashboard from "../../Pages/AdminDashboard.jsx";
const PrivateRoute = () => {

    const [userRole, setUserRole] = useState();

    const getUserRole = async () => {
        try {
            const response = await instance.get('/dashboard');
            setUserRole(response.data.user.role);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getUserRole()
    }, []);

    const navigate = useNavigate();

    return userRole ==='admin' ? <AdminDashboard/> : navigate('/dashboard');
}

export default PrivateRoute;