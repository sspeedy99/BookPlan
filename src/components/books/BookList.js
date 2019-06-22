import React from 'react';
import BookSummary from './BookSummery'

const BookList = ({books}) => {
    return (
        <div className="project-list section">
            {books && books.map(book => {
                return (
                    //passing each book into BookSummary.
                    <BookSummary book={book} key = {book.id}/>
                )
            })}
        </div>
    )
}

export default BookList;