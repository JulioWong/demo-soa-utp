import { ActionTypes } from "../constants/action-types";

const state_initial = {
    all: [],
    one: {}
}

export const insuranceReducer = (state = state_initial, {type, payload}) => {
    switch (type) {
        case ActionTypes.ALL_INSURANCE:
            return {
                ...state, 
                all: payload,
            };

        case ActionTypes.FIND_INSURANCE:
            return {
                ...state, 
                one: payload,
            };
            
        default:
            return state;
    };
}
