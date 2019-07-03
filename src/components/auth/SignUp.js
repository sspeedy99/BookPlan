import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
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
        console.log(this.state);
      }
      

    render() {
      const { auth } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-4">Sign Up</h5>
                  <div className ="input-field" >
                      <label htmlFor="fistname">First Name</label>
                      <input type="text" id="firstname" onChange={this.handleChange}/>
                  </div>
                  <div className ="input-field" >
                      <label htmlFor="lastname">Last Name</label>
                      <input type="text" id="lastname" onChange={this.handleChange}/>
                  </div>
                  <div className ="input-field" >
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" onChange={this.handleChange}/>
                  </div>
                  <div className ="input-field" >
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                  </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)

