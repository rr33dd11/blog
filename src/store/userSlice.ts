import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserDTO} from "../interfaces/IUSers/UserDTO.ts";

interface UserState {
    isAuth: boolean;
    email: string;
    id: string
}

const initialState: UserState = {
    isAuth: !!localStorage.getItem('token'),
    email: localStorage.getItem('email') || '',
    id: localStorage.getItem('myId') || ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<UserDTO>) => {
            state.isAuth = true;
            state.email = action.payload.email
            state.id = action.payload.id
        },
        logout: (state) => {
            state.isAuth = false;
            state.email = '';
            state.id = ''
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
