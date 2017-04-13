import React, { Component } from 'react';
import ChildState from './ChildState'
export default class ComponentState extends Component {     // Ili moze state da se deklarise konstruktorom
    constructor(props){
        super(props)
        this.state = {count: 0}
    }
    //state = {count: 0}
    tick = () => {
        this.setState({
                count: this.state.count + 1
            })
        }
    render() {
        return (
            <div>
                <button onClick = {this.tick}>Click count</button>
                <span>it is: {this.state.count}</span>
                <ChildState callBackTick = {this.tick}></ChildState>
            </div>
        )
    }
}