import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NoMatch } from "./Pages/NoMatch";
import Navigation from './Header/Navigation';
import Topheader from './Header/Topheader'
import { Jumbotron } from './Body/Jumbotron';
import {Login}  from './Pages/Login'
import {Signup} from './Pages/Signup'
import {UpdateNote} from './Body/UpdateNote'
import {UploadNote} from './Body/UploadNote'
import {MyNotes} from './Body/MyNotes'
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <Jumbotron />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/upload" component={UploadNote} />
            <Route path="/updateNote/:id" component={UpdateNote} />
            <Route path="/mynotes" component={MyNotes}/>
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
