import React, { Component } from 'react';
import moment from 'moment';

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
    return this.state.launches.map(
      ({
        flight_number,
        mission_name,
        launch_date_local,
        details,
        launch_site: { site_name_long }
      }) => (
        <Card
          key={flight_number}
          header={`${flight_number}. ${mission_name} - ${moment(
            launch_date_local
          ).format('Do MMM YYYY h:mma')}`}
        >
          <span>Launched from {site_name_long}</span>
          <br />
          <span className="details">{formatSentences(details)}</span>
        </Card>
      )
    );
  };

  render() {
    return (
      <div className="launches">
        <h1 className="is-centred">Launches</h1>

        {this.state.launches ? (
          this.renderLaunches()
        ) : (
          <h2 className="is-centred">Loading...</h2>
        )}
      </div>
    );
  }
}

export default LaunchesPage;
