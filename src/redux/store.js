import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slice/loadingSlice";
import toastReducer from "./slice/toastSlice"


export const store = configureStore({
    reducer:{
        loadingStore:loadingReducer,
        toastStore:toastReducer,
    }
});

