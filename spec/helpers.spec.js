/* global describe it */
import React from 'react';

import { expect } from 'chai';

import dateformat from '../src/helpers/dateformat';
import htmlstringparser from '../src/helpers/htmlparser';
import spinner from '../src/helpers/spinner';

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
    describe('spinner', function () {
      it('is a function', function () {
        expect(spinner).to.be.a('function');
      });
      it('takes no arguments', function () {
        expect(spinner.length).to.equal(0);
      });
      it('returns a fontawesome spinner when called', function () {
        expect(spinner()).to.eql(<i className='fa fa-spinner fa-spin fa-3x fa-fw' />);
      });
    });
  });
});
