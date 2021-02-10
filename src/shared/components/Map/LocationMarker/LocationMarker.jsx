import React from 'react';
import { Marker } from '@react-google-maps/api';

export default function LocationMarker({ position }) {
  return <Marker position={position} />;
}
