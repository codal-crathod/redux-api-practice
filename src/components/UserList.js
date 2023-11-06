import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getUsers } from '../reducer/userActions';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector( (state) => state.users );

    useEffect( () => {
        dispatch(getUsers());
    },[dispatch]);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;