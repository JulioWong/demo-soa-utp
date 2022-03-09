import { ActionTypes } from "../constants/action-types";

const state_initial = {
    totalKm: 0,
    data: [],
}

export const tripReducer = (state = state_initial, {type, payload}) => {
  switch (type) {
    case ActionTypes.ALL_TRIPS:
      return {
          ...state, 
          ...payload,
      };
        
    default:
      return state;
  };
}
