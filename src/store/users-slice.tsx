import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';

import {USERS_INFO_URL} from '../utils/config';

import User from '../models/User';

const API_URL = USERS_INFO_URL;

type usersState = {
    users: User[];
}

const initialState : usersState = {
    users:[]
}

const usersSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers: {
        setUsers(state:usersState, action: PayloadAction<{users:User[]}>) {
            console.log(action.payload.users);
            state.users = action.payload.users;
        }
    }
})

const usersActions = usersSlice.actions;

export const fetchUsers = () => {
    return async (dispatch:Dispatch) => {
        try {
            const response = await fetch(API_URL);
            const responseData = await response.json();
            dispatch(usersActions.setUsers({users:responseData}));
        } catch (error) {

        }
    }
}

export default usersSlice;