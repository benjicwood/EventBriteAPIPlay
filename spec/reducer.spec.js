/* global describe it beforeEach */
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import reducer from '../src/reducers/reducer';

export const initialState = {
  loading: false,
  error: null,
  events: []
};

describe('reducer function', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
  it('dispatches when passed action FETCH_EVENTS_REQUEST', function () {
    var action, newState;
    beforeEach(function () {
      action = actions.fetchEventsRequest();
      newState = reducer(initialState, action);
    });
  });
  it('dispatches when passed action FETCH_EVENTS_SUCCESS', function () {
    var action, newState;
    beforeEach(function () {
      action = actions.fetchEventsSuccess();
      newState = reducer(initialState, action);
    });
  });
  it('dispatches when passed action FETCH_EVENTS_ERROR', function () {
    var action, newState;
    beforeEach(function () {
      action = actions.fetchEventsError();
      newState = reducer(initialState, action);
    });
  });
});
