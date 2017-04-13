import React, { Component, PropTypes } from 'react';

export default class ChildState extends Component {
    state = {  }
    render() {
        return (
            <button onClick = {this.props.callBackTick}>Call parent tick</button>
        );
    }
}

ChildState.propTypes = {
    callBackTick: PropTypes.func.isRequired
}