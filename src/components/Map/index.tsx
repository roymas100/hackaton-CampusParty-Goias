import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const position = { lat: -22.2154042, lng: -54.8331331 };

const Map: React.FC = () => {
  return (
    <MapContainer center={[-12.9285057, -38.5085962]} zoom={13} scrollWheelZoom={false} style={{ width: 600, height: 600 }}>
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
);
}

export default Map;