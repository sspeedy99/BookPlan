import React from 'react';
//Link used to provide hyperlink in the react app
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLink';
import SignedOutLinks from './SignOutLink';
const Navbar = (props) => {
  return (
    //Materialize CSS Wrapper with nav
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        {/*Hyperlink to the brand title of the page*/ }
        <Link className="brand-logo" to="/">BookPlan</Link>
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>
  )
}
export default Navbar;
