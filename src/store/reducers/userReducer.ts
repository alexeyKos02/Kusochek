import {User, UserState} from "../../types/user";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const defaultState: UserState = {
    loading: false,
    error: null,
    user: {id: 0, userName: null, email: null}
}

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        return response.data
    }
)
export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state: UserState) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchUser.fulfilled, (state: UserState, action: PayloadAction<User>) => {
            state.user = {id: action.payload.id, userName: action.payload.userName, email: action.payload.email}
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state: UserState, {error}) => {
            state.error = error.message || null
            state.loading = false
        })
    }
})

export default userSlice.reducer