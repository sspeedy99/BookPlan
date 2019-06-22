import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BookDetails from './components/books/BookDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateNew from './components/books/CreateNew'
class App extends Component {
  render() {
    return (
      /*Enable Routing insdie our react application*/ 
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          < Route exact path = '/' component={Dashboard}/>
          < Route path = '/books/:id' component={BookDetails}/>
          < Route path = '/signin' component={SignIn}/>
          < Route path = '/signup' component={SignUp}/>
          < Route path = '/createnew' component={CreateNew}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
 

export default App;
