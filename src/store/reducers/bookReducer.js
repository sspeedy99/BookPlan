const initState = {
    books:[
    {id: '1', title: 'Narnia', content: 'blah blah blah'},
    {id: '2', title: 'Harry Potter', content: 'blah blah blah'},
    {id: '3', title: 'The Golden Compass', content: 'blah blah blah'}  
    ]
}


const bookReducer = (state = initState, action) => {
    return state
}

export default bookReducer