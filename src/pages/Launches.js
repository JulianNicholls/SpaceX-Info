import React, { useState, useEffect } from 'react';
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

const LaunchesPage = () => {
  const [launches, setLaunches] = useState(null);

  const initialLoad = async () => {
    const launches = await loadLaunches();

    setLaunches(launches);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  const renderLaunches = () => {
    return launches.map(
      ({
        launch_success,
        flight_number,
        mission_name,
        launch_date_local,
        rocket: { rocket_name },
        details,
        launch_site: { site_name_long },
        rocket: {
          second_stage: { payloads },
        },
        upcoming,
      }) => {
        const headerClass = upcoming
          ? 'upcoming'
          : launch_success
          ? 'success'
          : 'failure';
        const launch_verb = upcoming ? 'launching' : 'launched';
        const payloads_text = renderPayloads(payloads);

        return (
          <Card
            key={flight_number}
            header={`${flight_number}. ${mission_name} - `}
            subheader={`${moment(launch_date_local).format('Do MMM YYYY h:mma')}`}
            headerClass={headerClass}
          >
            <p>
              {`${rocket_name} ${launch_verb} from ${site_name_long} with ${payloads_text}`}
            </p>
            <p className="details">{formatSentences(details)}</p>
          </Card>
        );
      }
    );
  };

  return (
    <div className="launches">
      <h1 className="is-centred">Launches</h1>

      {launches ? renderLaunches() : <h2 className="is-centred">Loading...</h2>}
    </div>
  );
};

export default LaunchesPage;
