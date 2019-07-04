import React from 'react';
//Link used to provide hyperlink in the react app
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLink';
import SignedOutLinks from './SignOutLink';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const {auth,profile} = props
    //Checkin if the user is signed in or not
    //if the user is signed in then show SignedLinks or SignedOut
    //If the user is signed in then the uid will not be null
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    //Materialize CSS Wrapper with nav
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        {/*Hyperlink to the brand title of the page*/ }
        <Link className="brand-logo" to="/">BookPlan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
      auth:state.firebase.auth, // reading from firestore property of the root reducer
      profile: state.firebase.profile
  }
}


export default connect(mapStateToProps)(Navbar);
