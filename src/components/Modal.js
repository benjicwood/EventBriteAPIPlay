import React, { Component } from 'react';
import Modal from 'react-modal';

import htmlparser from '../helpers/htmlparser';

export default class Mo extends Component {
  constructor () {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal () {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal () {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div className='is-pulled-left'>
        <a className='button is-hovered' onClick={this.openModal} href={this.props.url}>Detail View</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className='modal-content'
          contentLabel='Example Modal'
          style={customStyles}
        >
          <h2 ref='subtitle'>{htmlparser(this.props.html)}</h2>
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content: {
    backgroundColor: '#fff'

  }
};
