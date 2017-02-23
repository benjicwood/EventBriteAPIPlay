import React, { Component } from 'react';

import EventsList from './EventsList';

export default class App extends Component {
  render () {
    return (
      <div>
        <p>Hello, World!</p>
        <EventsList />
      </div>
    );
  }
}
