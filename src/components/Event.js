import React, { Component } from 'react';
// import * as actions from '../actions/actions';

import ModalView from './Modal';

import date from '../helpers/dateformat';

export default class Event extends Component {
  render () {
    return (
      <div style={styles.background}>
        <div className='columns'>
          <div className='card' style={styles.card}>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-128x128'>
                    <img src={this.props.image} style={styles.image} alt='Image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-5' style={styles.font}>{this.props.name}</p>
                  <p className='subtitle is-6'>{date(this.props.startdate)}</p>
                  <ModalView html={this.props.html} /><a className='button is-hovered' href={this.props.url}>Go To Event</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  background: {
    backgroundColor: 'black'
  },
  card: {
    backgroundColor: 'whitesmoke',
    margin: '0 auto',
    width: '80%'
  },
  image: {
    borderStyle: 'solid',
    borderWidth: 'medium'
  },
  font: {
    fontFamily: 'Arial'
  },
  center: {
    margin: '0 auto'

  }
};
