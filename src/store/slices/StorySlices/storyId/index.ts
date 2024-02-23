import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface storyIDArrayState {
    stories: number[]
}

// Define the initial state using that type
const initialState: storyIDArrayState = {
    stories: [0, 0, 0],
}
export const storyIDArraySlice = createSlice({
    name: "storyId",
    initialState: initialState,
    reducers: {
        changeCurrentStoryID: (state, action: PayloadAction<{ value: number, id: number }>) => {
            state.stories[action.payload.id] = action.payload.value
        }
    }
})

export const selectStoryIDArray = (state: { storyIDArray: storyIDArrayState }) => state
export const {changeCurrentStoryID} = storyIDArraySlice.actions
export default storyIDArraySlice.reducer