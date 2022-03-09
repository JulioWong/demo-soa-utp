import { combineReducers } from "redux";
import { insuranceReducer } from "./insuranceReducer";
import { tripReducer } from "./tripReducer";

const reducers = combineReducers({
    insurances : insuranceReducer,
    trips: tripReducer
});

export default reducers;