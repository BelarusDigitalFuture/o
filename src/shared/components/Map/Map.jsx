import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { DEFAULT_COORDS } from '../../constants';

const containerStyle = {
  height: '300px',
};

export default function Map({ center, onClick, children }) {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || DEFAULT_COORDS}
        zoom={16}
        onClick={onClick}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
}
