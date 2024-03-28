import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    value: {}
}

export const getSummary = createAsyncThunk(
    'transaction/get-summary',
    async (_, thunkAPI) => {
        try {
            const response = await customFetch.get('/developer/transaction/get-summary', {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.value.message)
        }
    }
)

const getSummarySlice = createSlice({
    name: 'summary',
    initialState,
    extraReducers: (builder) => {
        builder 
            .addCase(getSummary.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSummary.fulfilled, (state, { payload }) => {
                state.isLoading = false
                const { value } = payload
                state.value = value
            })
            .addCase(getSummary.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)
            })
    }
})

export default getSummarySlice.reducer


