import { configureStore } from '@reduxjs/toolkit'

import loginSlice from "./showloginSlice"
import reviewSlice from './reviewSlice';

export default configureStore({
    reducer:{
        login: loginSlice,
        review: reviewSlice
    }
});