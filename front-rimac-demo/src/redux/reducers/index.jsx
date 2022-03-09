import { combineReducers } from "redux";
import { insuranceReducer } from "./insuranceReducer";

const reducers = combineReducers({
    allInsurances : insuranceReducer,
});

export default reducers;