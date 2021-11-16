import React from 'react';
import { Map } from './styles';

const GoogleMap = ({ isMapFullWidth, position, name }) => {
  return (
    <Map isFullWidth={isMapFullWidth} >
      <iframe
        width='100%'
        height='100%'
        loading="lazy"
        src={position ?
          `https://maps.google.com/maps?q=${position.PositionLat},${position.PositionLon}&hl=zh-TW&z=16&output=embed` :
          `https://maps.google.com/maps?q=${name}&hl=zh-TW&z=16&output=embed`
        }
        style={{ borderRadius: 8 }}
      />
    </Map>
  );
};

export default GoogleMap;