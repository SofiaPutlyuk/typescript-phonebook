import { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { phoneData } from "../phonebookSlice";
interface newPhoneData {
    name: string,
    age: number,
    number: string,
    city: string
}
export const getPhoneUser = createAsyncThunk<
    phoneData[],
    void,
    { state: RootState }
>(
    "phonebook/getPhoneUser",
    async (_, thunkApi) => {
        try {
            const response = await fetch("http://localhost:5000/api/phone")
            const data: phoneData[] = await response.json()
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue("error")
        }
    }
)
export const postPhoneUser = createAsyncThunk<
    phoneData,
    newPhoneData,
    { state: RootState }
>(
    "phonebook/postUserPhone",
    async (userData, thunkApi) => {
        try {
            const response = await fetch("http://localhost:5000/api/phone", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            const data: phoneData = await response.json()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue("error")
        }
    }
)