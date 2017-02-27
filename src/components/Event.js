import React, { Component } from 'react';
// import * as actions from '../actions/actions';

import Modal from './Modal';

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
            <div className='content'>
              <strong>{this.props.name}</strong>
              <p>{date(this.props.startdate).toString().slice(0, 24)}</p>
              <dl><Modal /><a className='button is-hovered' href={this.props.url}>Go To Event</a></dl>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
