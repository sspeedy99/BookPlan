import React, { Component } from 'react'
import { createBook } from '../../store/actions/bookAction';
import {connect} from 'react-redux';

class CreateNew extends Component {
    state= {
        title : '',
        content : ''
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
        //passing our newly created project to the action creater 
        this.props.createBook(this.state);

      }
      

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-4">Add a new Book!</h5>
                  <div className ="input-field" >
                      <label htmlFor="title">Title</label>
                      <input type="text" id="title" onChange={this.handleChange}/>
                  </div>
                  <div className ="input-field" >
                      <label htmlFor="content">What inspired you to start this ?</label>
                      <input type="text" id="content" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Add</button>
                  </div>
                </form>
            </div>
        )
    }
}

//Mapping our disptached data to the props of the componenet
const mapDispatchToProps = dispatch => {
  return {
    createBook: (book) => dispatch(createBook(book))
  }
}

//the first argument of the connect HOC is mapStateToProps which is null here.
export default connect(null,mapDispatchToProps)(CreateNew)

