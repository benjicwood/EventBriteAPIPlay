/* global describe it beforeEach */
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import reducer from '../src/reducers/reducer';

export const initialState = {
  loading: false,
  error: null,
  events: []
};

describe('reducer', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
  describe('FETCH_EVENTS_REQUEST', function () {
    it('dispatches when passed action FETCH_EVENTS_REQUEST', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsRequest();
        newState = reducer(initialState, action);
        expect(newState).to.eql({ loading: true, error: null, events: [] });
      });
    });
    it('does not mutate the initial state', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsRequest();
        newState = reducer(initialState, action);
        expect(newState).to.not.equal(initialState);
      });
    });
    it('should change loading property to true', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsRequest();
        newState = reducer(initialState, action);
        expect(newState.loading).to.equal(true);
      });
    });
  });
  describe('FETCH_EVENTS_SUCCESS', function () {
    it('dispatches when passed action FETCH_EVENTS_SUCCESS', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsSuccess(['events here']);
        newState = reducer(initialState, action);
        expect(newState).to.eql({ loading: false, error: null, events: ['events here'] });
      });
    });
    it('does not mutate the initial state', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsSuccess(['events here']);
        newState = reducer(initialState, action);
        expect(newState).to.not.equal(initialState);
      });
    });
    it('changes articles property to action.data', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsSuccess(['events here']);
        newState = reducer(initialState, action);
        expect(newState.events).to.eql(['events here']);
      });
    });
  });
  describe('FETCH_EVENTS_ERROR', function () {
    it('dispatches when passed action FETCH_EVENTS_ERROR', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsError('error');
        newState = reducer(initialState, action);
        expect(newState).to.eql({ loading: false, error: 'error', events: [] });
      });
    });
    it('does not mutate the initial state', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsError('error');
        newState = reducer(initialState, action);
        expect(newState).to.not.equal(initialState);
      });
    });
    it('changes error property to action.error', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventsError('error');
        newState = reducer(initialState, action);
        expect(newState.error).to.equal('error');
      });
    });
  });
});
