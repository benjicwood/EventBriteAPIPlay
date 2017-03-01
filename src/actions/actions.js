import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

export function fetchEvents () {
  return (dispatch) => {
    dispatch(fetchEventsRequest());
    request
    .get(`${ROOT}`)
    .end((error, response) => {
      if (error) dispatch(fetchEventsError(error));
      else dispatch(fetchEventsSuccess(response.body));
    });
  };
}

export function fetchEventsRequest () {
  return {
    type: types.FETCH_EVENTS_REQUEST
  };
}

export function fetchEventsSuccess (data) {
  return {
    type: types.FETCH_EVENTS_SUCCESS,
    data: data
  };
}

export function fetchEventsError (error) {
  return {
    type: types.FETCH_EVENTS_ERROR,
    error: error
  };
}
