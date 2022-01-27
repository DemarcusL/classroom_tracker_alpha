import React from 'react';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem }  from 'react-bootstrap';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>GradeBook Lite</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/students" className="nav-link">Students</Link></NavItem>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    )
  }
}

export default withAuth0(Header);