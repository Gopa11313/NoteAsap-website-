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
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Topheader />
        <Navigation />
        <Jumbotron />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
