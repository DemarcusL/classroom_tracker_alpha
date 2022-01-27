import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Header from './components/Header';
import TeacherView from './components/TeacherView';
import Gradebook from './components/Gradebook';
import UpdateGrade from './components/UpdateGrade';
import AddGrade from './components/AddGrade';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: null,
      user: null,
      students: null,
      chosen: '',
      chosenID: ''
    }
  }
  componentDidMount = () => {
    this.getStudents();
  }
  loginHandler = (user) => {
    this.setState({
      user,
    })
  }
  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
  getStudents = async (req, res) => {
    res = await axios.get('http://localhost:3001/seed');
    this.setState({students: res.data})
  }
  viewGrades = (name, id) => {
    console.log(name);
    this.setState({
      chosen: name,
      chosenID: id
    });
  }
  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated &&
                <>
                  Welcome to GradeBook Lite.
                </>
              }
            </Route >
            <Route exact path="/students">
              {this.props.auth0.isAuthenticated && this.state.students &&
                <>
                  <TeacherView viewGrade={this.viewGrades} popStudents={this.getStudents} students={this.state.students} />
                </>
              }
            </Route>
            <Route exact path="/gradebook">
              <Gradebook chosen={this.state.chosen} chosenID={this.state.chosenID} students={this.state.students} />
            </Route>
            <Route exact path="/update-grade">
              <UpdateGrade chosenID={this.state.chosenID} chosen={this.state.chosen} />
            </Route>
            <Route exact path="/add-grade">
              <AddGrade chosenID={this.state.chosenID} chosen={this.state.chosen} />
            </Route>
          </Switch>

        </Router>
      </>
    );
  }
}
export default withAuth0(App);

