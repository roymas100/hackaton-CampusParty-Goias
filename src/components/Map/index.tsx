import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { Container } from './styles';
const AnyReactComponent = ({ text }: { text: any; lat: any; lng: any}) => <div>{text}</div>;

const Map: React.FC = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (<div style={{ height: '100vh', width: '100%' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: "" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
</div>);
}

export default Map;