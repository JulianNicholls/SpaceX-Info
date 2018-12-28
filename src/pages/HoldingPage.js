import React from 'react';

function HoldingPage({ location }) {
  const { pathname } = location;

  const pagename = pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <div className="holding">
      <h1 className="is-centred">{pagename} - under construction</h1>
      <p>
        This page has not been filled in yet. Send{' '}
        <a href="mailto:juliannicholls29@gmail.com&subject=Get%20on%20with%20SpaceX">
          Julian
        </a>{' '}
        an email and tell him to get on with it 😆.
      </p>
      <img src="/images/construction.png" alt="Under Construction" />
    </div>
  );
}

export default HoldingPage;
