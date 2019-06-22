import React, { Component } from 'react'

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
        console.log(this.state);
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
                      <label htmlFor="content">Book Summery</label>
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

export default CreateNew

