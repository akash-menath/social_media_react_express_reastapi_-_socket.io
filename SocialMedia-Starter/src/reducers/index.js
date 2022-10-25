import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./Postreducer";

export const reducers = combineReducers({ authReducer ,postReducer});
