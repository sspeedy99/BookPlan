import React from 'react';
import BookSummary from './BookSummery'

const BookList = () => {
    return (
        <div className="project-list section">
            <BookSummary/>
            <BookSummary/>
            <BookSummary/>
        </div>
    )
}

export default BookList;