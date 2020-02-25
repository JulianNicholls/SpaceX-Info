import React, { useState, useEffect } from 'react';
import highlightJSON from 'json-format-highlight';

import { loadSection } from '../api';
import Loading from '../components/Loading';

interface HoldingPageProps {
  location: { pathname: string };
  pagename: string;
}

function HoldingPage({ location, pagename }: HoldingPageProps): JSX.Element {
  const [data, setData] = useState(null);

  const { pathname } = location;

  const dataname = pathname.slice(1);
  pagename = pagename || dataname[0].toUpperCase() + dataname.slice(1);

  useEffect(() => {
    const loadData = async () => {
      const responseData = await loadSection(dataname);

      setData(responseData);
    };

    loadData();
  }, [dataname]);

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

      <section className="raw-data">
        <h2 className="is-centred">Raw Data</h2>
        {data ? (
          <pre dangerouslySetInnerHTML={{ __html: highlightJSON(data) }} />
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
}

export default HoldingPage;
