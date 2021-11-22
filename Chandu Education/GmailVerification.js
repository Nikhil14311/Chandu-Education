import React from 'react';
import { auth } from './firebase/firebase.utils';
import HomePage from './HomePage';
import SignIn from './SignIn';

class GmailVerification extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='user-info'>
        {

          this.state.currentUser ?
                      <HomePage
                          image={this.state.currentUser.photoURL}
                          name={this.state.currentUser.displayName}
                      /> :
                      <SignIn/>
        }
      </div >
    );
  }
}


export default GmailVerification;
