import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "../Slice/taskSlice"
import authReducer from "../Slice/authSlice"
import profileReducer from "../Slice/profileSlice"
const rootReducer = combineReducers({
        task: taskReducer, 
        auth:authReducer,
        profile:profileReducer,    
});
export default rootReducer;
