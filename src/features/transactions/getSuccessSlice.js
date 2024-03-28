import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from 'react-toastify'

const initialState = {
    isLoading: false,
    payments: [],
    pageNumber: '',
    pageSize: '',
    totalPages: '',
    totalRecords: '',
}

export const getSuccessPayments = createAsyncThunk(
    'transaction/get-successful-payments',
    async (_, thunkAPI) => {
        try {
            const response = await customFetch.get('/developer/transaction/get-succesful-payments',{
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

const getSuccessSlice = createSlice({
    name: 'payments',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSuccessPayments.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSuccessPayments.fulfilled, (state, { payload }) => {
                state.isLoading = false
                const { data, pageNumber, pageSize, totalPages, totalRecords } = payload.value
                state.payments = data
                state.pageNumber = pageNumber
                state.pageSize = pageSize
                state.totalPages = totalPages
                state.totalRecords = totalRecords
            })
            .addCase(getSuccessPayments.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)  
            })
    }
})

export default getSuccessSlice.reducer

