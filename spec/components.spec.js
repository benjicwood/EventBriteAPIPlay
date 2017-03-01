/* global describe it */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';

import App from '../src/components/App';
import Event from '../src/components/Event';
import EventsList from '../src/components/EventsList';
import Loading from '../src/components/Loading';
import ModalView from '../src/components/Modal';

chai.use(chaiEnzyme());

describe('Components', function () {
  describe('<App />', function () {
    it('renders one <EventsList /> component', function () {
      const wrapper = shallow(<App />);
      expect(wrapper.find(EventsList)).to.have.length(1);
    });
  });
  describe('<Event />', function () {
    it('renders one <ModalView /> component', function () {
      const wrapper = shallow(<Event />);
      expect(wrapper.find(ModalView)).to.have.length(1);
    });
  });
  describe('EventsList', function () {
  });
  describe('Loading', function () {
  });
  describe('Modal', function () {
  });
});
