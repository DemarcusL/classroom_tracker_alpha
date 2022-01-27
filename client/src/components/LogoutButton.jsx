import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
class LogoutButton extends Component {
  render() {
    const {
      // get the auth0 properties that we need from auth0
      isAuthenticated,
      logout
    } = this.props.auth0;
    //only IF user is authenticated
    return isAuthenticated && (
      <button onClick={() => {
        logout({ returnTo: window.location.origin });
      }}> Log Out </button>
    );
  }
}
export default withAuth0(LogoutButton);