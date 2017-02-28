/* global describe it */
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('actions', function () {
  describe('fetchEventsRequest', function () {
    it('has a FETCH_EVENTS_REQUEST', function () {
      expect(types.FETCH_EVENTS_REQUEST).to.equal('FETCH_EVENTS_REQUEST');
    });
    it('is a function', function () {
      expect(actions.fetchEventsRequest()).to.be.an('object');
    });
    it('returns an object', function () {
      expect(actions.fetchEventsRequest()).to.be.an('object');
    });
  });
  describe('fetchEventsSuccess', function () {
    it('has a FETCH_EVENTS_SUCCESS type', function () {
      expect(types.FETCH_EVENTS_SUCCESS).to.equal('FETCH_EVENTS_SUCCESS');
    });
    it('is a function', function () {
      expect(actions.fetchEventsSuccess).to.be.a('function');
    });
    it('returns an object', function () {
      expect(actions.fetchEventsSuccess()).to.be.an('object');
    });
  });
  describe('fetchEventsError', function () {
    it('has a FETCH_EVENTS_ERROR type', function () {
      expect(types.FETCH_EVENTS_ERROR).to.equal('FETCH_EVENTS_ERROR');
    });
    it('is a function', function () {
      expect(actions.fetchEventsError).to.be.a('function');
    });
    it('returns an object', function () {
      expect(actions.fetchEventsError()).to.be.an('object');
    });
  });
});
