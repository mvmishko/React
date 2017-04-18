import React, { Component } from 'react';
import studentsData from './studentsData'
import Attendee from './Attendee.js'

var styleTotal = {
    float:'right', margin: 10, padding: 25, backgroundColor: 'lightblue', width: 200, height: 250, textAlign: "center"
}
var styleP = {
    fontSize: "20", color: "darkred"
}

export default class Attendence extends Component {
    constructor(props){
        super(props)
        this.state = {
            present: 0,
            absent: 0,
            listPresent: [],
            listAbsent: [],
            unmarked: studentsData.length
        }
    }

    presentCount = (idStud) => {
        this.setState({
            present: this.state.present + 1,
            unmarked: this.state.unmarked -1,
            //listPresent: this.state.listPresent.concat([idStud]).sort()
            listPresent: [...this.state.listPresent,idStud].sort()
        })
    }

    absentCount = (idStud) => {
        this.setState({
            absent: this.state.absent + 1,
            unmarked: this.state.unmarked -1,
            listAbsent: this.state.listAbsent.concat([idStud]).sort()
        })
    }

    addPresent(idStudent){
            //state.listPresent.push(idStudent)
            //setState({listPresent: this.state.listPresent})
            this.state.listPresent.concat([idStudent])
    }

    render() {
        return (
            <div>
                <Attendee 
                    firstName = {studentsData[0].firstName}
                    lastName = {studentsData[0].lastName}
                    imgLink = {studentsData[0].image}
                    gender = {studentsData[0].gender}
                    id = {studentsData[0].id}
                    onClickPresent = {this.presentCount}
                    onClickAbsent = {this.absentCount}
                    addStudentPresent = {this.addPresent}
                />
                <Attendee 
                    firstName = {studentsData[1].firstName}
                    lastName = {studentsData[1].lastName}
                    imgLink = {studentsData[1].image}
                    gender = {studentsData[1].gender}
                    id = {studentsData[1].id}
                    onClickPresent = {this.presentCount}
                    onClickAbsent = {this.absentCount}
                    addStudentPresent = {this.addPresent}
                />
                <Attendee 
                    firstName = {studentsData[2].firstName}
                    lastName = {studentsData[2].lastName}
                    imgLink = {studentsData[2].image}
                    gender = {studentsData[2].gender}
                    id = {studentsData[2].id}
                    onClickPresent = {this.presentCount}
                    onClickAbsent = {this.absentCount}
                    addStudentPresent = {this.addPresent}
                />
                <Attendee 
                    firstName = {studentsData[3].firstName}
                    lastName = {studentsData[3].lastName}
                    imgLink = {studentsData[3].image}
                    gender = {studentsData[3].gender}
                    id = {studentsData[3].id}
                    onClickPresent = {this.presentCount}
                    onClickAbsent = {this.absentCount}
                    addStudentPresent = {this.addPresent}
                />
                <div style = {styleTotal}> 
                    <h2>Total attendees</h2>
                    <p style={styleP}>Present = {this.state.present}, [ {this.state.listPresent + " "} ]</p>
                    <p style={styleP}>Absent: {this.state.absent}, [ {this.state.listAbsent + " "}]</p>
                    <p style={styleP}>Unmarked: {this.state.unmarked}</p>
                </div>
            </div>
        );
    }
}