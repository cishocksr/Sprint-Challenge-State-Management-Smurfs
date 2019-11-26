import {
  SMURF_LOAD_START,
  SMURF_LOAD_SUCCESS,
  SMURF_LOAD_FAILURE
} from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_LOAD_START:
      return { ...state, isFething: true };
    case SMURF_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case SMURF_LOAD_FAILURE:
      return {
        ...state,
        isFecthing: false,
        error: action.payload
      };
    default:
      return state;
  }
};
