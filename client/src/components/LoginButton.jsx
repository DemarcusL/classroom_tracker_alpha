import { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
class LoginButton extends Component {
  render() {
    const {
      loginWithRedirect,
      isAuthenticated,
    } = this.props.auth0;
    return !isAuthenticated && (
      <button onClick={loginWithRedirect}> Log In! </button>
    );
  }
}
export default withAuth0(LoginButton);



