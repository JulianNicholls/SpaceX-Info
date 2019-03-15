import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import { loadRockets } from '../api';
import { formatSentences } from '../utils';

const RocketsPage = () => {
  const [rockets, setRockets] = useState(null);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const rockets = await loadRockets();

    setRockets(rockets);
  };

  const renderRockets = () => {
    return rockets.map(({ id, rocket_name, description }) => {
      return (
        <Card key={id} header={rocket_name}>
          <p className="details">{formatSentences(description)}</p>
        </Card>
      );
    });
  };

  return (
    <div className="rockets">
      <h1 className="is-centred">Rockets</h1>
      {rockets ? renderRockets() : <h2 className="is-centred">Loading...</h2>}
    </div>
  );
};

export default RocketsPage;
