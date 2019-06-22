import React from 'react';
//Link used to provide hyperlink in the react app
import {  NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
  return (
   <ul className="right">
       <li><NavLink to = '/createnew'>Add New</NavLink></li>
       <li><NavLink to = '/'>Log Out</NavLink></li>
       <li><NavLink to = '/' className='btn btn-floating pink lighten-1 '>SP</NavLink></li>
   </ul>
  )
}
export default SignedInLinks;
