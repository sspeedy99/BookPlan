/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//Link used to provide hyperlink in the react app
import {  NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
   <ul className="right">
       <li><NavLink to = '/createnew'>Add New</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
       <li><NavLink to = '/' className='btn btn-floating pink lighten-1 '>SP</NavLink></li>
   </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
