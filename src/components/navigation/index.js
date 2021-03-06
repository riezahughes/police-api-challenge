import React from 'react';
import './Navigation.css';
import SearchIcon from '@material-ui/icons/Search';
import PinDropIcon from '@material-ui/icons/PinDrop';

const Navigation = () => (
  <div id="navBarContainer">
    <nav id="navBarLeft">
      <ul>
        <li>
          <SearchIcon />
        </li>
        <li>
          <PinDropIcon />
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
