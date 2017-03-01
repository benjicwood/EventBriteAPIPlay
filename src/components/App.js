import React, { Component } from 'react';

import EventsList from './EventsList';

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <EventsList />
      </div>
    );
  }
}
