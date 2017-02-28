/* global describe it */
import { expect } from 'chai';
import dateformat from '../src/helpers/dateformat';

describe('helper functions', function () {
  describe('dataformat', function () {
    it('is a function', function () {
      expect(dateformat).to.be.a('function');
    });
    it('takes one argument', function () {
      expect(dateformat.length).to.equal(1);
    });
  });
});
