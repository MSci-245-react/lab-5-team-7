import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { TextField } from '@mui/material';

export default configureStore ({
    reducer: {
        counter: counterReducer,
    },
})