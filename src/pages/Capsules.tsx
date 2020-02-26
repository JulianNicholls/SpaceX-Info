import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Card from '../components/Card';

import { loadCapsules } from '../api';

interface Mission {
  name: string;
  flight: number;
}

interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  missions: Array<Mission>;
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

function renderMissions(missions: Array<Mission>) {
  const count = missions.length;

  if (count === 0) return null;

  let num = `${count} ${count === 1 ? 'mission' : 'missions'}`;

  const list = missions
    .map(({ name, flight }): string => `Flight ${flight} - ${name}`)
    .join(', ');

  return (
    <p>
      {num}: {list}
    </p>
  );
}

const CapsulesPage = (): JSX.Element => {
  const [capsules, setCapsules] = useState<Array<Capsule>>([]);

  useEffect(() => {
    const initialLoad = async () => {
      const capsules = await loadCapsules();

      setCapsules(capsules);
    };

    initialLoad();
  }, []);

  const renderCapsules = (): Array<JSX.Element> => {
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
      }): JSX.Element => {
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
            {original_launch ? (
              <p>
                Original Launch Date:{' '}
                {moment(original_launch).format('Do MMM YYYY h:mma')}
              </p>
            ) : null}
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
      {capsules.length !== 0 ? (
        renderCapsules()
      ) : (
        <h2 className="is-centred">Loading...</h2>
      )}
    </div>
  );
};

export default CapsulesPage;
