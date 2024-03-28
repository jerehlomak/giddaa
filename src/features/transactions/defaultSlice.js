import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    value: {}
}

export const getMissedTransaction = createAsyncThunk(
    'transaction/get-missed-transaction',
    async (_, thunkAPI) => {
        try {
            const response = await customFetch.get('/developer/transaction/get-missed-payments', {
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

const getMissedTransactionSlice = createSlice({
    name: 'missed-transaction',
    initialState,
    extraReducers: (builder) => {
        builder 
            .addCase(getMissedTransaction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMissedTransaction.fulfilled, (state, { payload }) => {
                state.isLoading = false
                const { value } = payload
                state.value = value
            })
            .addCase(getMissedTransaction.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)
            })
    }
})

export default getMissedTransactionSlice.reducer


