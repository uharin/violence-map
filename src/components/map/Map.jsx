import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { MAPBOX_TOKEN } from '../../api/map';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.4406,
    longitude: -79.9959,
    zoom: 7,
    pitch: 0,
    bearing: 0,
  });

  return (
    <div style={{height: '100%', width: '100%'}}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%' }}
        mapStyle='mapbox://styles/uharin/clwo9xmy300em01qe98df2psy'
        onMove={evt => setViewport(evt.viewState)}
        projection="globe"
      >
      </ReactMapGL>
    </div>
  )
};

export default Map;