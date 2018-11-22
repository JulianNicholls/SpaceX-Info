import React, { Component } from 'react';
import moment from 'moment';

import Card from '../components/Card';

import { loadLaunches } from '../api';
import { formatSentences } from '../utils';

// I assumed that at least 1 early mission would have no payload, but no
function renderPayloads(payloads) {
  const count = payloads.length;
  let num = `${count} ${count === 1 ? 'payload' : 'payloads'}`;

  const list = payloads
    .map(({ payload_type, payload_id }) => `${payload_type} ${payload_id}`)
    .join(', ');

  return `${num}: ${list}`;
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
        launch_site: { site_name_long },
        rocket: {
          second_stage: { payloads }
        }
      }) => (
        <Card
          key={flight_number}
          header={`${flight_number}. ${mission_name} - `}
          subheader={`${moment(launch_date_local).format('Do MMM YYYY h:mma')}`}
          headerClass={launch_success ? 'success' : 'failure'}
        >
          <p>
            {rocket_name} rocket launched from {site_name_long} with{' '}
            {renderPayloads(payloads)}
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
