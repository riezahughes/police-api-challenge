/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './Map.css';
import { makeStyles } from '@material-ui/core/styles';

import ReactMapGL from 'react-map-gl';

const useStyles = makeStyles(() => ({
  mapEnabled: {
    display: 'none',
  },
  mapDisabled: {
    opacity: 0.4,
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    background: 'white',
    zIndex: '19',
  },
}));

const MapBackground = ({ update, viewport, active }) => {
  const classes = useStyles();
  console.log(`map is: ${active}`);
  return (
    <div>
      <div className={active ? classes.mapEnabled : classes.mapDisabled} />
      <div
        id="mapContainer"
      >
        <ReactMapGL
          {...viewport}
          onViewportChange={((e) => update(e))}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxApiAccessToken="pk.eyJ1IjoicmllemFodWdoZXMiLCJhIjoiY2tsaWhwYzNxMmNwNzJwczQ5MGxucWc0cCJ9.L5Z1fquoS62EpvOzu5Zrxw"
        />
      </div>
    </div>
  );
};

export default MapBackground;
