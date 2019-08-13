import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Text from './components/layout/Text'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'
import NotFound from './components/pages/Notfound'
import GithibState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
  return (
    <GithibState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Text />
                    <Alert />
                    <Search />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/about' render={
                  props => (
                    <About />
                  )
                }
                />
                <Route exact path='/user/:login' render={props => (
                  <User  {...props} />
                )} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithibState>
  );


}

export default App;
