import React from 'react';

const BookSummary = ({book}) => {
    return (
    <div className="card z-depth-0 white project-summray">
        <div className="card-content grey-text text-darken-4">
            <span className="card-title">{book.title}</span>
            <p>Posted by Shashi Prakash</p>
            <p className="grey-text">21st June, 5PM</p>
        </div>
    </div>
    )
}

export default BookSummary;