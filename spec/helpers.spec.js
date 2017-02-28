/* global describe it */
import { expect } from 'chai';

import dateformat from '../src/helpers/dateformat';
import htmlstringparser from '../src/helpers/htmlparser';

describe('helper functions', function () {
  describe('dateformat', function () {
    it('is a function', function () {
      expect(dateformat).to.be.a('function');
    });
    it('takes one argument', function () {
      expect(dateformat.length).to.equal(1);
    });
    it('returns a string format using .toString()', function () {
      var apidate = '2015-11-08T01:00:00';
      expect(dateformat(apidate)).to.be.a('string');
    });
    it('formats the date into a more readable format', function () {
      var apidate = '2015-11-08T01:00:00';
      expect(dateformat(apidate)).to.equal('Sun Nov 08 2015 01:00:00');
    });
    it('removes the timezone (GMT+0000 (GMT)) from the formatted string by slicing the string', function () {
      var apidate = '2015-11-08T01:00:00';
      expect(dateformat(apidate).length).to.equal(24);
    });
  });
  describe('htmlstringparser', function () {
    it('is a function', function () {
      expect(htmlstringparser).to.be.a('function');
    });
    it('takes one argument', function () {
      expect(htmlstringparser.length).to.equal(1);
    });
    it('returns a react div element as an object', function () {
      expect(htmlstringparser()).to.be.a('object');
    });
  });
});
