import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  events: []
};

export default function reducer (state, action) {
  state = state || initialState;
  switch (action.type) {
    case types.FETCH_EVENTS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case types.FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        events: action.data
      });
    case types.FETCH_EVENTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}
