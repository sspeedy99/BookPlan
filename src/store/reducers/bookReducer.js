const initState = {
    books:[
    {id: '1', title: 'Narnia', content: 'blah blah blah'},
    {id: '2', title: 'Harry Potter', content: 'blah blah blah'},
    {id: '3', title: 'The Golden Compass', content: 'blah blah blah'}  
    ]
}


const bookReducer = (state = initState, action) => {
    switch(action.type)
    {
        //checking if the action type of the dispatch is create a new book, if yes then log it to the console
        case 'CREATE_BOOK':
            console.log('created a new book', action.book);
            return state;
        case 'CREATE_BOOK_ERROR':
            console.log('create book error', action.err)
            return state;
        default:
            return state;
    }   
}

export default bookReducer