let geocoder;

function setGeocoder() {
  geocoder = new window.google.maps.Geocoder();
}

const geocode = (...args) => {
  if (!geocoder) {
    setGeocoder();
  }
  return geocoder.geocode(...args);
};

const Geocoder = {
  geocode,
};

export default Geocoder;
