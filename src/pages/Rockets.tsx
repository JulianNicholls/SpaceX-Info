import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import { loadRockets } from '../api';
import { formatSentences } from '../utils';

interface Rocket {
  id: number;
  rocket_name: string;
  description: string;
}

const RocketsPage = (): JSX.Element => {
  const [rockets, setRockets] = useState<Array<Rocket>>([]);

  useEffect(() => {
    const initialLoad = async () => {
      const rockets = await loadRockets();

      setRockets(rockets);
    };

    initialLoad();
  }, []);

  const renderRockets = (): Array<JSX.Element> => {
    return rockets.map(
      ({ id, rocket_name, description }: Rocket): JSX.Element => {
        return (
          <Card key={id} header={rocket_name}>
            <p className="details">{formatSentences(description)}</p>
          </Card>
        );
      }
    );
  };

  return (
    <div className="rockets">
      <h1 className="is-centred">Rockets</h1>
      {rockets ? renderRockets() : <h2 className="is-centred">Loading...</h2>}
    </div>
  );
};

export default RocketsPage;
