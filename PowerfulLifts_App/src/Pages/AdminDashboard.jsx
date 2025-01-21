import React, {useEffect, useState} from 'react';
import UpdateUser from "../Components/Settings/UpdateUser.jsx";
import instance from "../utils/axiosConfig.js";
import Header from "../Components/Misc/Header.jsx";
import CreateUser from "../Components/Settings/CreateUser.jsx";

const AdminDashboard = () => {

    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [isAddUserFormVisible, setIsAddUserFormVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await instance.get('/users');
            setUsers(response.data.users);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const destroyUser = async (id) => {
        try {
            const response = await instance.delete(`/admin/${id}`);
            console.log(response);
            getUsers();
            alert('Utilisateur supprimé !');
        } catch (err) {
            console.log(err);
        }
    }

    function updateUser(user) {
        setCurrentUser(user);
        setIsUpdateFormVisible(true);
    }

    const handleCloseUpdate = () => {
        setCurrentUser("")
        setIsUpdateFormVisible(false);
        getUsers();
    }

    const handleCloseAdd = () => {
        setIsAddUserFormVisible(false);
        getUsers();
    }

    function addNewUser() {
        setIsAddUserFormVisible(true);
    }

    return (
        <>
            <Header/>
            <div>
                <table className={'admin-table'}>
                    <thead>
                        <tr>
                            <th colSpan={4}>
                                <h1>Utilisateurs</h1>
                                <div className="btn_container">
                                    <button onClick={() => addNewUser()}>Ajouter un utilisateur</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Nom</td>
                        <td>Email</td>
                        <td>Date d'inscription</td>
                    </tr>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => updateUser(user)}>Modifier</button>
                                <button className={'danger'} onClick={() => destroyUser(user.id)}>Supprimer le compte
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {isUpdateFormVisible && <UpdateUser handleClose={handleCloseUpdate} user={currentUser}/>}
                {isAddUserFormVisible && <CreateUser handleClose={handleCloseAdd}/>}
            </div>
        </>
    );
};

export default AdminDashboard;
