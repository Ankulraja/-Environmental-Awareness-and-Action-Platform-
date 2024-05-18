import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "../Slice/taskSlice"
import authReducer from "../Slice/authSlice"

const rootReducer = combineReducers({
        task: taskReducer, 
        auth:authReducer    
});
export default rootReducer;
