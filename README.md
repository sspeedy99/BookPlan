# BookPlan

BookPlan is an online book club for book lovers where they can post what are they currently reading and what inspired them to read this book.

## Build

This web app is written in react and hosted on firebase backend server.  
Tech Stack Used is --

```
React JS
Redux
Redux-thunk
firebase-auth
firestore
cloud firestore
```

## Usage

* User can add a new book and details about the book after signing into the app.  
* All the users will be notified when any new users join the group or existing members add a new book.    
* The user authentication is handled by firebase auth. It uses JWT to secure sign in for the users.   
* The notifications work in the realtime by using firebase's cloud functions to execute the notification code outside the client's browser but in the server side. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Development
This project is currently in an initial phase, so there are very few features.  
Work to be done --

* Enable Server-Side Rendering.
* Allow users to like and comment over other's posts.
* API call to Google books to get automatically description and Goodreads rating. 
* Allow users to change their profile.


## License
[MIT](https://choosealicense.com/licenses/mit/)
