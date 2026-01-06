import { createSlice } from "@reduxjs/toolkit";
import { getPhoneUser, postPhoneUser } from "./thunk/phoneThunk";
export interface phoneData {
    id: number,
    name: string,
    age: number,
    number: string,
    city: string
}
export interface phoneState {
    isLoading: boolean,
    error: string | null,
    info: phoneData[]
}
const initialState: phoneState = {
    isLoading: false,
    error: null,
    info: []
}
const PhoneSlice = createSlice({
    name: "phonebook",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPhoneUser.pending, (state, action) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getPhoneUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.info = action.payload
                state.error = null
            })
            .addCase(getPhoneUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = null
            })
            .addCase(postPhoneUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.info.push(action.payload)
                state.error = null
            })
    },
})
export default PhoneSlice.reducer