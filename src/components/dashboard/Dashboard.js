import React, {Component} from 'react';
import Notification from './Notifications';
import BookList from '../books/BookList';

class Dashboard extends Component {
    render() {
        return (
           <div className='dashboard container'>
               <div className="row">
                   {/*Div for the Book List */}
                   <div className="col s12 m6">
                       <BookList/>
                    </div>
                   {/*Div for the Feeds list */}
                   <div className="col s12 m5 offset-m1">
                       <Notification/>
                    </div>
               </div>
           </div> 
        )
    }
}

export default Dashboard;