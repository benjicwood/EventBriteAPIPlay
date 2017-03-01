import React, { Component } from 'react';

export default class Loading extends Component {
  render () {
    return (
      <div style={center}>
        <h2>Loading...</h2>
        <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
        <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
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
