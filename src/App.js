import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LaunchesPage from './pages/Launches';
import RocketsPage from './pages/Rockets';
import HoldingPage from './pages/HoldingPage';

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
              <Route path="/capsules" component={HoldingPage} />
              <Route path="/cores" component={HoldingPage} />
              <Route path="/dragons" component={HoldingPage} />
              <Route path="/history" component={HoldingPage} />
              <Route path="/info" component={HoldingPage} />
              <Route path="/launchpads" component={HoldingPage} />
              <Route path="/landingpads" component={HoldingPage} />
              <Route path="/missions" component={HoldingPage} />
              <Route path="/payloads" component={HoldingPage} />
              <Route path="/rockets" component={RocketsPage} />
              <Route path="/roadster" component={HoldingPage} />
              <Route path="/ships" component={HoldingPage} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
