/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './Map.css';

import ReactMapGL from 'react-map-gl';

const MapBackground = ({ update, viewport }) => (
  <div id="mapContainer">
    <ReactMapGL
      {...viewport}
      onViewportChange={((e) => update(e))}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken="pk.eyJ1IjoicmllemFodWdoZXMiLCJhIjoiY2tsaWhwYzNxMmNwNzJwczQ5MGxucWc0cCJ9.L5Z1fquoS62EpvOzu5Zrxw"
    />
  </div>
);

export default MapBackground;
