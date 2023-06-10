import React, { useEffect, useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { useStyles } from '@/context/StylesContext';

const mapboxToken = "pk.eyJ1Ijoicm95bWFzIiwiYSI6ImNrbzJ1MzJsMjBrczcydm92aWdrbnJxcWEifQ.n_0SSfh3rMQvOfIGeQvGag"
const id = "mapbox/dark-v10"
const Map: React.FC = () => {

  const { isDarkMode } = useStyles()

  const id = useMemo(() => {
    return isDarkMode ? "mapbox/dark-v10" : "mapbox/light-v10"
  }, [isDarkMode])

  return (
    <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: '100%' }}>
       <TileLayer
        url={`https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
      />
    </MapContainer>
  );
}

export default Map;