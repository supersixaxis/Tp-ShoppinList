import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './article/articleSlice'
export const store = configureStore({
    reducer: {
       article : articleReducer,
    }
})