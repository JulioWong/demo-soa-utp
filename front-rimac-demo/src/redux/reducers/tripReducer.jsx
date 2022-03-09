import { ActionTypes } from "../constants/action-types";

const state_initial = {
    all: [],
}

export const tripReducer = (state = state_initial, {type, payload}) => {
  switch (type) {
    case ActionTypes.ALL_TRIPS:
      return {
          ...state, 
          all: payload,
      };
        
    default:
      return state;
  };
}
