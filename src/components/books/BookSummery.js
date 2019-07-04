import React from 'react';
import moment from 'moment'

const BookSummary = ({book}) => {
    return (
    <div className="card z-depth-0 white project-summray">
        <div className="card-content grey-text text-darken-4">
            <span className="card-title">{book.title}</span>
            <p>Posted by {book.authorFirstName} {book.authorLastName}</p>
            <p className="grey-text">{moment(book.cretedAt.toDate()).calendar()}</p>
        </div>
    </div>
    )
}

export default BookSummary;