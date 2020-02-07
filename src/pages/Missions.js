import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import { loadMissions } from '../api';
import { formatSentences } from '../utils';

const MissionsPage = () => {
  const [missions, setMissions] = useState(null);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const missions = await loadMissions();

    setMissions(missions);
  };

  const renderMissions = () => {
    return missions.map(
      ({
        mission_id,
        mission_name,
        manufacturers,
        payload_ids,
        wikipedia,
        website,
        description,
      }) => {
        return (
          <Card
            key={mission_id}
            header={`${mission_name} - `}
            subheader={mission_id}
          >
            <p>Manufacturers: {manufacturers.join(', ')}</p>
            <p>Payloads: {payload_ids.join(', ')}</p>
            <p className="details">{formatSentences(description)}</p>
            {wikipedia && (
              <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            )}
            <br />
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                {mission_name}
              </a>
            )}
          </Card>
        );
      }
    );
  };

  return (
    <div className="missions">
      <h1 className="is-centred">Missions</h1>
      {missions ? renderMissions() : <h2 className="is-centred">Loading...</h2>}
    </div>
  );
};

export default MissionsPage;
