import { ActionTypes } from "../constants/action-types";

const state_initial = {
    payload: {
        total: 0,
        data: [

        ]
    }
}

export const insuranceReducer = (state = state_initial, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_INSURANCE:
            return {
                ...state, 
                payload: payload,
            };
               
        default:
            return state;
    };
}
