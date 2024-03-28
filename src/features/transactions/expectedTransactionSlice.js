import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    value: {}
}

export const getExpectedTransaction = createAsyncThunk(
    'transaction/get-expected-transaction',
    async (_, thunkAPI) => {
        try {
            const response = await customFetch.get('/developer/transaction/get-expected-payments', {
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

const getExpectedTransactionSlice = createSlice({
    name: 'expected-transaction',
    initialState,
    extraReducers: (builder) => {
        builder 
            .addCase(getExpectedTransaction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getExpectedTransaction.fulfilled, (state, { payload }) => {
                state.isLoading = false
                const { value } = payload
                state.value = value
            })
            .addCase(getExpectedTransaction.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)
            })
    }
})

export default getExpectedTransactionSlice.reducer


