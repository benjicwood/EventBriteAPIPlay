/* global describe it */
import { expect } from 'chai';
import reducer from '../src/reducers/reducer';

describe('reducer function', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
});
