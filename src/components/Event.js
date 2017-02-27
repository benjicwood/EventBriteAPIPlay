import React, { Component } from 'react';
// import * as actions from '../actions/actions';

import Modal from './Modal';

import date from '../helpers/dateformat';

export default class Event extends Component {
  render () {
    return (
      <div>

        <div className='card'>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <figure className='image is-128x128'>
                  <img src={this.props.image} alt='Image' />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>{this.props.name}</p>
                <p className='subtitle is-6'>{date(this.props.startdate).toString().slice(0, 24)}</p>
                <Modal html={this.props.html} /><a className='button is-hovered' href={this.props.url}>Go To Event</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
