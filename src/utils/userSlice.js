import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        //as soon as user signs in or signs up we will get user data from firebase and we will store it in redux store using this action
        addUser: (state, action) => {
            //this state is previous state of user which is null initially
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;