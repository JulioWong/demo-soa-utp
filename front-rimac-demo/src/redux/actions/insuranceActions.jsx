import { ActionTypes } from "../constants/action-types"
import axios from "axios";

const url = "http://localhost:8040/api/insurance";

export const getInsurances = (insurance) => {
    return {
        type : ActionTypes.SELECTED_INSURANCE,
        payload : insurance
    };
};

export const fetchInsurances = () => async (dispatch) => {
    const response = await axios.get(url);
    dispatch(getInsurances(response.data)); 
};
