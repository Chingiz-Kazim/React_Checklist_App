import { createSlice } from "@reduxjs/toolkit";

export const checklistSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        destroyTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
    }
});

export const { addTask,destroyTask } = checklistSlice.actions;


export default checklistSlice.reducer;