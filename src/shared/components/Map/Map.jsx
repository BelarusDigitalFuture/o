import React from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';
import { faMarker, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_COORDS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon className="aria-hidden" icon={faMapMarker} size="4x" />
    {/* <p className="pin-text">{text}</p> */}
  </div>
);

export default function Map() {
  return (
    <div className="map--container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAuQkFRETuOr3aXsdjYU5H7YTFK-LOZSnU' }}
        defaultZoom={16}
        defaultCenter={DEFAULT_COORDS}
      >
        <LocationPin {...DEFAULT_COORDS} text="haha" />
      </GoogleMapReact>
    </div>
  );
}
