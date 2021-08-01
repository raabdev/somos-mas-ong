import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

import { mapStyles } from "./mapStyles";

const Map = props => {
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.initialCenter}
      options={{
        styles: mapStyles,
      }}
    >
      {props.isMarkerShown && <Marker position={props.center} />}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
