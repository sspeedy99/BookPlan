//Action creator for the new book added to the list

export const createBook = (book) => {
    // dispatch property sends state to reducer
    return (dispatch, getState,{getFirebase,getFirestore}) => {
        //pausing the dispatch and sending 
      // make async call to database
      //configuring our database to the reducer
      const firestore = getFirestore();
      //adding  documenets into books collection of the firestore database
      firestore.collection('books').add({
        //spreadin the project to get its methode
        ...book,
        authorFirstName:'Shashi',
        authorLastName:'Singh',
        authorId:12345,
        cretedAt: new Date()

      }).then(()=>{ // adding to the firestore database is async request, so it will return a promise. when the promise is returned then the dispatch action is fired.
        dispatch({ type: 'CREATE_BOOK', book });
      }).catch((err) => { // if the async code cathes some error, it will dispatch the error action.
        dispatch({type:'CREATE_BOOK_ERROR', book})
      }) //books collection of the firestore database
      
      //asking action creator to add a new book to the state.
    }
  }; 