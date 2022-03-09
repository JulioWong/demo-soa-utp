import { ActionTypes } from "../constants/action-types"
import axios from "axios";

const url = "http://localhost:8080/api";

const getTrips = (trips) => {
    return {
        type : ActionTypes.ALL_TRIPS,
        payload : trips.data
    };
};

export const getAllTrips = (proposalId) => async (dispatch) => {
    const response = await axios.get(`${url}/proposal/${proposalId}/trips`);
    dispatch(getTrips(response.data));
};
