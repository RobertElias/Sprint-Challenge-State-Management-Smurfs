import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_SMURF_FETCH_REQUEST,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF_FETCH_REQUEST:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload
      };
      default: return state;
  }
};

export default reducer;
