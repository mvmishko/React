import React, { Component } from 'react';

var styleNone = {
    float:'left',margin: 10, padding: 15, backgroundColor: 'gray'
}
var stylePresent = {
    float:'left',margin: 10, padding: 15, backgroundColor: 'green'
}
var styleAbsent = {
    float:'left',margin: 10, padding: 15, backgroundColor: 'red'
}

export default class Attendee extends Component {
    constructor(props){
        super(props)
        this.state = {
            markPresent: false,
            markLate: false,
            markAbsent: false,
            studentId : 0
        }
    }

    present = () => {
        if(!this.state.markPresent && !this.state.markAbsent){
            this.setState({
                markPresent: true},
			    this.props.onClickPresent(this.props.id)
		    )
            //this.props.addStudentPresent(this.props.id)
        }
    }

    absent = () => {
        if(!this.state.markPresent && !this.state.markAbsent)
            this.setState({
                markAbsent: true,}, 
                this.props.onClickAbsent(this.props.id)
            )
    }

    render() {
        const {firstName, lastName, imgLink, gender, id, onClickPresent, onClickAbsent, addStudentPresent} = this.props
        const name = `${firstName} ${lastName}`     //tzv. selektor koji generise full name
        return (
            <div style = {(!this.state.markPresent && !this.state.markAbsent) ? styleNone : this.state.markPresent?stylePresent:styleAbsent}>
                <span>id={id} {name}, ({gender})</span><br/>
                <img src={imgLink} width="250px" alt=""/>
                <div style={ (this.state.markPresent || this.state.markAbsent) ? {display:'none'}:{display:'block'}}>
                    <button onClick={this.present}>
                        <span>present</span>
                    </button>
                    <button onClick={this.absent}>
                        <span>absent</span>
                    </button>
                </div>
            </div>
        );
    }
}