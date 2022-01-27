import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default class TeacherView extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentGrade: null,
    }
  }
  // spencerClick = () => {
  //   this.setState({spencer: true, demarcus: false, jonathan: false})
  // }
  // demarcusClick = () => {
  //   this.setState({spencer: false, demarcus: true, jonathan: false})
  // }
  // jonathanClick = () => {
  //   this.setState({spencer: false, demarcus: false, jonathan: true})
  // }
  render() {
    return (
      <div className='container-fluid'> {this.props.students.map((student, index) => <div className='col'><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.Image} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Link to="/gradebook" className="nav-link"><Button variant='primary' onClick={() => {this.props.viewGrade(student.name, student._id)}}>Gradebook</Button></Link>
      </Card.Body>
    </Card></div>)}
      </div>
    )
  }
}
