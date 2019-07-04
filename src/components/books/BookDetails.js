import React from 'react'
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const BookDetails = (props) => {
    const { book } = props;
    if(book) {
        return(
        <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                    <span className="card-title">{book.title}</span>
                    <p>{book.content}</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by {book.authorFirstName} {book.authorLastName}</div>
                   <div>{moment(book.cretedAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</div>
               </div>
            </div> 
        </div>
        )
        
    } 
    else {
        return (
            <div className="container center">
                <p>Loading Book Details...</p>
            </div>
            )
    }
   
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const books = state.firestore.data.books;
    const book = books ? books[id] : null
    return {
        // reading from firestore property of the root reducer
        book : book
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        { collection:'books' }
    ])
)(BookDetails);
