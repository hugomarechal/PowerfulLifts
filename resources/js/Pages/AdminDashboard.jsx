import React, {useState} from 'react';
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import {Inertia} from "@inertiajs/inertia";
import UpdateUser from "../Components/UpdateUser.jsx";

const AdminDashboard = ({users}) => {

    const [isPopinVisible, setIsPopinVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState("");

    function destroyUser(id) {
        Inertia.delete(route('admin.destroy', id), {
            onSuccess: () => alert('Le compte a été supprimé')
        })
    }

    function updateUser(user) {
        setCurrentUser(user);
        setIsPopinVisible(true);
    }

    const handleClose = () => {
        setCurrentUser("")
        setIsPopinVisible(false)
    }

    return (
        <DashboardLayout>
                <table className={'admin-table'}>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Date d'inscription</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => updateUser(user)}>Modifier</button>
                                    <button className={'danger'} onClick={() => destroyUser(user.id)}>Supprimer le compte</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            {isPopinVisible && <UpdateUser handleClose={handleClose} user={currentUser}/>}
        </DashboardLayout>
    );
};

export default AdminDashboard;
