import React from 'react';
//Link used to provide hyperlink in the react app
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {
  return (
   <ul className="right">
       <li><NavLink to = '/signup'>Sign Up</NavLink></li>
       <li><NavLink to = '/signin'>Log In</NavLink></li>
   </ul>
  )
}
export default SignedOutLinks;
