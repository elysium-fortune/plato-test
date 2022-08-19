import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import {RootState} from '../store';
const UsersList = () => {
    const usersState = useSelector((state:RootState) => state.users);
    const users = usersState.users;
    return (
        <div>
            <ul>
                {
                    users.map(user=>{
                        return <li key={user.id}>
                            User${user.id}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default UsersList;