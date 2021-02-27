import React, { useEffect, useState } from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import Navigation from './components/navigation';
import Searchbar from './components/searchbar';
import MapBackground from './components/map';

function App() {
  // const [favourites, setFavourites] = useState([]);

  const [viewport, setViewport] = useState(
    {
      width: '100vw',
      height: '100vh',
      latitude: 54.36060950142795,
      longitude: -3.8983213425061107,
      zoom: 5.2,
    },
  );

  const [mapActive, setMapActive] = useState(false);

  const updateMapActive = () => {
    setMapActive((previousState) => !previousState);
  };

  const updateViewport = (e) => {
    setViewport(e);
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setViewport({
          width: '100vw',
          height: '100vh',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 16,
        });
      });
    }
  });

  return (
    <div className="App">
      <MapBackground
        active={mapActive}
        updateActiveState={updateMapActive}
        viewport={viewport}
        update={updateViewport}
      />
      <Container maxWidth="md">
        <div id="bodyContainer">
          <Navigation />
          <Searchbar />
        </div>
      </Container>
    </div>
  );
}

export default App;
