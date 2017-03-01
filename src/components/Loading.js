import React, { Component } from 'react';

import spinner from '../helpers/spinner';

export default class Loading extends Component {
  render () {
    return (
      <div style={center}>
        <h2>Loading...</h2>
        {spinner()}
        {spinner()}
      </div>
    );
  }
}

const center = {
  position: 'absolute',
  margin: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100px',
  height: '100px'
};
