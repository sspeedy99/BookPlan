import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state= {
        email : '',
        password : ''
    }
    // funtion to fire onChange event handler
    //takes an event as an argument, 
    handleChange = (e) => {
        this.setState({
            //selecting the target by the id, and update the value of the field in state.
          [e.target.id]: e.target.value
        })
      }
    // finction to fire onSubmit event handler
      handleSubmit = (e) => {
        e.preventDefault(); //stop the refreshing of the page
        this.props.signIn(this.state)
      }
      

    render() {
      const {authError, auth} = this.props;
      if(auth.uid) return <Redirect to='/'/>
        return (
          
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-4">SignIn</h5>
                  <div className ="input-field" >
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" onChange={this.handleChange}/>
                  </div>
                  <div className ="input-field" >
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="center red-text">
                    { authError ? <p>{authError}</p> : null }
                    </div>
                  </div>
                </form>
            </div>
        )
    }
}

//assigning auth error to the sstate
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth:state.firebase.auth
  }
}

//mapping our dispatch to the props, to pass credentials to the 
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

