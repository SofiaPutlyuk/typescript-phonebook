import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./phonebookSlice"
 const store = configureStore({
    reducer: {
        phone: phoneReducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch