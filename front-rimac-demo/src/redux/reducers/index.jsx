import { combineReducers } from "redux";
import { insuranceReducer } from "./insuranceReducer";

const reducers = combineReducers({
    insurances : insuranceReducer,
});

export default reducers;