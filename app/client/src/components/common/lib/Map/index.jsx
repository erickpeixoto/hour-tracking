import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from './routerMap';


const App = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmo8Yl-Q7KzhMtoWcEx6Jc4Nyjpt6Tb9g"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default App
