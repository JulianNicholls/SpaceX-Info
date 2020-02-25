import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LaunchesPage from './pages/Launches';
import CapsulesPage from './pages/Capsules';
import MissionsPage from './pages/Missions';
import RocketsPage from './pages/Rockets';
import HoldingPage from './pages/HoldingPage';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import 'normalize.css/normalize.css';
import './App.scss';

const App = (): JSX.Element =>  (
  <div className="App">
    <Router>
      <>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={LaunchesPage} />
          <Route path="/capsules" component={CapsulesPage} />
          <Route path="/missions" component={MissionsPage} />
          <Route path="/rockets" component={RocketsPage} />
          <Route path="/cores" component={HoldingPage} />
          <Route path="/dragons" component={HoldingPage} />
          <Route path="/history" component={HoldingPage} />
          <Route path="/info" component={HoldingPage} />
          <Route
            path="/launchpads"
            render={(props: any) => (
              <HoldingPage {...props} pagename={'Launch Pads'} />
            )}
          />
          <Route
            path="/landpads"
            render={(props: any) => (
              <HoldingPage {...props} pagename={'Landing Pads'} />
            )}
          />
          <Route path="/payloads" component={HoldingPage} />
          <Route path="/roadster" component={HoldingPage} />
          <Route path="/ships" component={HoldingPage} />
        </Switch>
      </>
    </Router>
  </div>
);

export default App;
