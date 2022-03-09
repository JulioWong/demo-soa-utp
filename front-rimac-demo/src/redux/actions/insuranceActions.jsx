import { ActionTypes } from "../constants/action-types"
import axios from "axios";

const url = "http://localhost:8040/api";

const getInsurances = (insurance) => {
    return {
        type : ActionTypes.ALL_INSURANCE,
        payload : insurance.data
    };
};

const findInsurance = (insurance) => {
    return {
        type : ActionTypes.FIND_INSURANCE,
        payload : insurance
    };
};

export const getAllInsurances = () => async (dispatch) => {
    const response = await axios.get(`${url}/insurance`);
    dispatch(getInsurances(response.data)); 
};

export const findOneInsurance = (insuranceId) => async (dispatch) => {
    const response = await axios.get(`${url}/insurance/${insuranceId}`);
    dispatch(findInsurance(response.data)); 
};
