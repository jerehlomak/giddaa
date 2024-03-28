import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from '../utils/axios'
import { toast } from 'react-toastify'
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../utils/localStorage";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage()
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            const response = await customFetch.post('/account/login', user)
           
            return response.data.value
        } catch (error) {
            
            return thunkAPI.rejectWithValue(error.response.data.value.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null
            removeUserFromLocalStorage()
            toast.success('Successfully Logged Out')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { value } = payload
                // console.log(payload, user);
                state.isLoading = false
                state.user = value
                addUserToLocalStorage(value)
                toast.success(`Successfully logged In`)
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload) 
            })
    }
})

export const { logoutUser } = userSlice.actions

export default userSlice.reducer

