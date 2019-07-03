//Action creater for the authentication method
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      //using firebase's method to sign in by email and password
      //Async call to call firebase's auth method
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({type:'SIGNOUT_SUCCESS'});
        })
    }
  }


  //Action creater for the signUp details.
  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
        
      //creating a new user in firestore database
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
          //create a record in firestore collection
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }