import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import getSuccessSlice from "./features/transactions/getSuccessSlice";
import getSummarySlice from "./features/transactions/summarySlice";
import getExpectedTransactionSlice from './features/transactions/expectedTransactionSlice'
import getMissedTransactionSlice  from "./features/transactions/defaultSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        payments: getSuccessSlice,
        summary: getSummarySlice,
        expected: getExpectedTransactionSlice,
        defaults: getMissedTransactionSlice,
    }
})



