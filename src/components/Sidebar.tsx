import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (): JSX.Element => (
  <aside>
    <nav>
      <NavLink to="/capsules">Capsules</NavLink>
      <NavLink to="/cores">Cores</NavLink>
      <NavLink to="/dragons">Dragons</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/info">Info</NavLink>
      <NavLink to="/launchpads">Launch Pads</NavLink>
      <NavLink to="/landpads">Landing Pads</NavLink>
      <NavLink to="/" exact>
        Launches
      </NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/payloads">Payloads</NavLink>
      <NavLink to="/rockets">Rockets</NavLink>
      <NavLink to="/roadster">Roadster</NavLink>
      <NavLink to="/ships">Ships</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
