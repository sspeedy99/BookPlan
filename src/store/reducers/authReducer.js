//This is a authentication reducer.
//It is an arrow function, which takes argument state and action.
//At first it will not have any state, so it will take initState as the state

//Creating initial state
const initState = {
    authError: null
}


const authReducer = (state = initState, action) => {
    switch(action.type)
    {
        //checking if the action type of the dispatch is create a new book, if yes then log it to the console
        case 'LOGIN_ERROR':
            console.log("Login Failed")
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login Success")
            return {
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signed Out');
            return state
            
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
              ...state,
              authError: null
            }
      
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
              ...state,
              authError: action.err.message
            }
        default:
            return state;
    }   
}

export default authReducer