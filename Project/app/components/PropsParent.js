import React, { Component, PropTypes } from 'react';   
//importovanje prop types je ranije isla drugacije a sada ovako:

import ChildComponent from './ChildComponent'



export default class Parent extends Component {
    state = {  }
    render() {
        return (
            <ChildComponent 
                name='Arnold' 
                lastName='Schwarzzi' 
                heigth='195'
            />
        )
    }
}

