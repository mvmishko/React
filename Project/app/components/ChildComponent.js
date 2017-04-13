import React, { Component, PropTypes } from 'react';
//import PropTypes from 'prop-type'

export default class ChildComponent extends Component {
    render() {
        const {name, lastName, heigth} = this.props
        return (
            <div>name: {name} {lastName}, heigth: {heigth}</div>
        )
    }
}


// Moze i da se sve isto uradi kao funkcija:
/*export default function  ChildComponent(props){
        const {name, lastname, heigth} = props
        return (<div>name: {name} {lastname}, heigth: {heigth}cm</div>)
    }*/


ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    heigth: PropTypes.number
}