import React, { Component } from 'react';

import Card from '../components/Card';

import { loadLaunches } from '../api';

function formatSentences(text) {
  return text ? text.replace(/\.\s+/g, '.\n\n') : '';
}

class LaunchesPage extends Component {
  state = {
    launches: null
  };

  async componentDidMount() {
    const launches = await loadLaunches();

    this.setState({ launches });
  }

  renderLaunches = () => {
    return this.state.launches.map(launch => (
      <Card
        key={launch.flight_number}
        header={`${launch.flight_number}. ${launch.mission_name}`}
      >
        <span className="details">{formatSentences(launch.details)}</span>
      </Card>
    ));
  };

  render() {
    return (
      <div className="launches">
        <h1 className="is-centred">Launches</h1>

        {this.state.launches ? this.renderLaunches() : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default LaunchesPage;
