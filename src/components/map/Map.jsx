import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { useSelector } from 'react-redux';
import { MAPBOX_TOKEN } from '../../api/map';

function Map() {
  const coordinates = useSelector((state) => state.map.coordinates);

  const [viewport, setViewport] = useState({ ...coordinates });

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%' }}
        mapStyle="mapbox://styles/uharin/clwo9xmy300em01qe98df2psy"
        onMove={(evt) => setViewport(evt.viewState)}
        projection="globe"
      />
    </div>
  );
}

export default Map;
