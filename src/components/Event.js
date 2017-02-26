import React, { Component } from 'react';
// import * as actions from '../actions/actions';

import date from '../helpers/dateformat';

export default class Event extends Component {
  render () {
    return (
      <div>
        <div className='box'>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img src={this.props.image} alt='Image' />
              </figure>
            </div>
            <div className='media-content'>
              <strong>{this.props.name}</strong>
              <p>{date(this.props.startdate).toString().slice(0, 24)}</p>
              <a className='button is-hovered' href={this.props.url}>GO TO EVENT</a>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
