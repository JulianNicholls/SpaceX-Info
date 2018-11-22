import React from 'react';

import Card from '../components/Card';

import { loadRockets } from '../api';
import { formatSentences } from '../utils';

class RocketsPage extends React.Component {
  state = {
    rockets: null
  };

  async componentDidMount() {
    const rockets = await loadRockets();

    this.setState({ rockets });
  }

  renderRockets = () => {
    return this.state.rockets.map(({ id, rocket_name, description }) => {
      return (
        <Card key={id} header={rocket_name}>
          <p className="details">{formatSentences(description)}</p>
        </Card>
      );
    });
  };

  render() {
    const { rockets } = this.state;

    console.log({ rockets });

    return (
      <div className="rockets">
        <h1 className="is-centred">Rockets</h1>
        {rockets ? (
          this.renderRockets()
        ) : (
          <h2 className="is-centred">Loading...</h2>
        )}
      </div>
    );
  }
}

export default RocketsPage;
