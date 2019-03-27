import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Card from '../components/Card';

import { loadCapsules } from '../api';

function renderMissions(missions) {
  const count = missions.length;

  if (count === 0) return null;

  let num = `${count} ${count === 1 ? 'mission' : 'missions'}`;

  const list = missions
    .map(({ name, flight }) => `Flight ${flight} - ${name}`)
    .join(', ');

  return (
    <p>
      {num}: {list}
    </p>
  );
}

const CapsulesPage = () => {
  const [capsules, setCapsules] = useState(null);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const capsules = await loadCapsules();

    setCapsules(capsules);
  };

  const renderCapsules = () => {
    return capsules.map(
      ({
        capsule_serial,
        capsule_id,
        status,
        original_launch,
        missions,
        landings,
        type,
        details,
        reuse_count,
      }) => {
        let headerClass = 'upcoming';

        if (status === 'active') headerClass = 'success';
        else if (status === 'destroyed') headerClass = 'failure';

        return (
          <Card
            key={capsule_serial}
            header={`${capsule_serial} - `}
            subheader={`${capsule_id} ${status}`}
            headerClass={headerClass}
          >
            {original_launch && (
              <p>
                Original Launch Date:{' '}
                {moment(original_launch).format('Do MMM YYYY h:mma')}
              </p>
            )}
            {renderMissions(missions)}
            <p>
              Landings: {landings}
              <br />
              Reuses: {reuse_count}
            </p>
            <p>{details}</p>
          </Card>
        );
      }
    );
  };

  return (
    <div className="missions">
      <h1 className="is-centred">Capsules</h1>
      {capsules ? renderCapsules() : <h2 className="is-centred">Loading...</h2>}
    </div>
  );
};

export default CapsulesPage;
