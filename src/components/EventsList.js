import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Event from './Event';

class EventsList extends Component {
  componentWillMount () {
    this.props.fetchEvents(this.props.events);
  }
  render () {
    if (!this.props.events.events) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          {this.props.events.events.map(function (event, i) {
            return <Event name={event.name.text} key={i} />;
          })}
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchEvents: () => {
      dispatch(actions.fetchEvents());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
