import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

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
      <div>
        <a className='button is-hovered' onClick={this.openModal} href={this.props.url}>Detail View</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <button onClick={this.closeModal}>close</button>
          <h2 ref='subtitle'>{this.props.html}</h2>
        </Modal>
      </div>
    );
  }
}
