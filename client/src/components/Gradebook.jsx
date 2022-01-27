import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Gradebook extends Component {
  render() {
    console.log("Gradebook rendered with chosen name " + this.props.chosen);
    console.log("First object of list of students name " + this.props.students[0].name);
    console.log("First object of list of students id " + this.props.students[0]._id);
    console.log(this.props.students);
    return (
        <div className='cont' style={{marginTop: 50, marginBottom: 50}}>
          {this.props.students.filter((student) => student._id.includes(this.props.chosenID)).map((item)=>{
         return  <Card style={{ width: '18rem'}}>
         <Card.Body>
           <Card.Title>{item.name}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
             the card's content.
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
           {item.gradeBook.map((grade) => { return <ListGroupItem>{grade.Assignment}: {grade.Grade} <Button className='float-end' >X</Button></ListGroupItem>})}
         </ListGroup>
         <Card.Body>
           <Card.Link><Link  to="/update-grade">Update Grade</Link></Card.Link>
           <Card.Link><Link to="/add-grade">Add Grade</Link></Card.Link>
         </Card.Body>
       </Card>
     })}
        </div>
    )
  }
}
