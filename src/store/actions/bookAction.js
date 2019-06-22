//Action creator for the new book added to the list

export const createBook = (book) => {
    // dispatch property sends state to reducer
    return (dispatch, getState) => {
        //pausing the dispatch and sending 
      // make async call to database
      dispatch({ type: 'CREATE_BOOK', book });
      //asking action creator to add a new book to the state.
    }
  }; 