/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './Map.css';
import { makeStyles } from '@material-ui/core/styles';

import ReactMapGL from 'react-map-gl';

const useStyles = makeStyles(() => ({
  mapEnabled: {
    opacity: 1,
  },
  mapDisabled: {
    opacity: 0.4,
  },
}));

const MapBackground = ({ update, viewport, active }) => {
  const classes = useStyles();
  return (
    <div id="mapContainer" className={active ? classes.mapEnabled : classes.mapDisabled}>
      <ReactMapGL
        {...viewport}
        onViewportChange={((e) => update(e))}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken="pk.eyJ1IjoicmllemFodWdoZXMiLCJhIjoiY2tsaWhwYzNxMmNwNzJwczQ5MGxucWc0cCJ9.L5Z1fquoS62EpvOzu5Zrxw"
      />
    </div>
  );
};

export default MapBackground;
