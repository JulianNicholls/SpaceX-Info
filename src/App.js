import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LaunchesPage from './pages/Launches';
import RocketsPage from './pages/Rockets';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import 'normalize.css/normalize.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header />
            <Sidebar />
            <Switch>
              <Route path="/" exact component={LaunchesPage} />
              <Route path="/rockets" component={RocketsPage} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
