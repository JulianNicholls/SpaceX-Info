import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import { loadMissions } from '../api';
import { formatSentences } from '../utils';

interface Mission {
  mission_id: string;
  mission_name: string;
  manufacturers: Array<string>;
  payload_ids: Array<string>;
  wikipedia: string;
  website: string;
  description: string;
}

const MissionsPage = () => {
  const [missions, setMissions] = useState<Array<Mission>>([]);

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
            {wikipedia ? (
              <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            ) : null}
            <br />
            {website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">
                {mission_name}
              </a>
            ) : null}
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
