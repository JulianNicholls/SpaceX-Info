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
        launch_success,
        flight_number,
        mission_name,
        launch_date_local,
        rocket: { rocket_name },
        details,
        launch_site: { site_name_long }
      }) => (
        <Card
          key={flight_number}
          header={`${flight_number}. ${mission_name} - `}
          subheader={`${moment(launch_date_local).format('Do MMM YYYY h:mma')}`}
          headerClass={launch_success ? 'success' : 'failure'}
        >
          <p>
            {rocket_name} rocket launched from {site_name_long}
            <br />
          </p>
          <p className="details">{formatSentences(details)}</p>
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
