import React, {Component} from 'react';
import Notification from './Notifications';
import BookList from '../books/BookList';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        //capturing books property from the props
        const { books, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
           <div className='dashboard container'>
               <div className="row">
                   {/*Div for the Book List */}
                   <div className="col s12 m6">
                       {/*Passing books property of the props to the BookList component */}
                       <BookList books = {books}/>
                    </div>
                   {/*Div for the Feeds list */}
                   <div className="col s12 m5 offset-m1">
                       <Notification/>
                    </div>
               </div>
           </div> 
        )
    }
}

//getting data from reducer and pass it to state.
//mapping our state to props
const mapStateToProps = (state) => {
    return {
        books:state.firestore.ordered.books,
        auth:state.firebase.auth
        // reading from firestore property of the root reducer
    }
}

//connect component to the reduer.
//connecting the dashboard component to the the books collection of the firestore database
export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        { collection:'books' }
    ])
)(Dashboard);