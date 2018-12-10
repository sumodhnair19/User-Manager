import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Components/Header';

import Home from './Pages/Home';
import Users from './Pages/Users';
import Groups from './Pages/Groups';
import GroupDetails from './Pages/GroupDetails';
import NotFoundPage from './Pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Header />
                <div className="app-body">
                    <div className ='main'>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/groups" component={Groups} />
                        <Route exact path="/group/:groupid" component={GroupDetails} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
  }
}

export default connect(null,null)(App);
