const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//creating a new notification collections to our firestore database
//each notifications will be added to our firestore database collection 'Notifications'
const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  });

//creating a new cloud function which will fire up when 
//there is new book is added to the collection
//the function trigger would be new book added to the collections

exports.projectCreated = functions.firestore
  .document('books/{bookId}')
  .onCreate(doc => {

    const project = doc.data();
    //notifying that some user has added a new book.
    // notification object will have all the required details
    const notification = {
      content: 'Added a New Book!',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      //timestamp of the updated document value
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

//cloud function -- triggers when the new user has joined into the book club
//when the new user has been added to the collection of the firestore
exports.userJoined = functions.auth.user()
  .onCreate(user => {
    //grabbing the new user form the firestore
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the Book Club!',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});