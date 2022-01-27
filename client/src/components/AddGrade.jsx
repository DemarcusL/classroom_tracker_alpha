import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect } from "react-router";



export default class AddGrade extends Component {

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

  // componentDidMount() {
  //   axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
  //     .then(res => {
  //       this.setState({
  //         name: res.data.name,
  //         email: res.data.email,
  //         rollno: res.data.rollno
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

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

    axios.post(`http://localhost:3001/student/update/${this.props.chosenID}`, gradeObject)
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


        <Button variant="danger" size="lg" block="block" type="submit">
          Add Grade
        </Button>
      </Form>
    </div></>);
  }
}