import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect } from "react-router";


export default class UpdateGrade extends Component {

  constructor(props) {
    super(props)

    this.onChangeAssignment = this.onChangeAssignment.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      Assignment: '',
      Grade: '',
      formSubmitted: false
    }
  }

  onChangeAssignment(e) {
    this.setState({ Assignment: e.target.value })
  }

  onChangeGrade(e) {
    this.setState({ Grade: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const gradeObject = {
      Assignment: this.state.Assignment,
      Grade: this.state.Grade
    };

    axios.put(`http://localhost:3001/student/update/${this.props.chosenID}`, gradeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Grade successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
      this.setState({formSubmitted: true});
  }


  render() {
    return (
      <>
      {this.state.formSubmitted && <Redirect to='/gradebook' />}
    
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Assignment">
          <Form.Label>Assignment</Form.Label>
          <Form.Control type="text" value={this.state.Assignment} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" value={this.state.Grade} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="New Grade">
          <Form.Label>New Grade</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Grade
        </Button>
      </Form>
    </div></>);
  }
}