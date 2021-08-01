import React from "react";
import styled from "@emotion/styled";
import { credentials } from "./credentials";
import { ContainerElement } from "./ContainerElement";
import Map from "./Map";
import { Spinner } from "@chakra-ui/react";

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}&v=3.exp&libraries=geometry,drawing,places`;

const Container = styled.div`
  margin: ${props => props.marginx || "0px"}
    ${props => props.marginy || "0px"};
`;

export function GoogleMapsContainer({
  initialCenter,
  zoom,
  isMarkerShown,
  width,
  height,
  marginx,
  marginy,
}) {
  return (
    <Container marginx={marginx} marginy={marginy}>
      <Map
        googleMapURL={mapURL}
        containerElement={<ContainerElement width={width} height={height} />}
        mapElement={<div style={{ height: `100%` }} />}
        loadingElement={<Spinner size="md" m={50}/>}
        initialCenter={initialCenter}
        zoom={zoom}
        isMarkerShown={isMarkerShown}
      />
    </Container>
  );
}
