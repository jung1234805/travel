import React, { useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const index = ({ navigation,route }) => {
  lat=route.params.lat
  lon=route.params.lon

  return (
    <Wrapper>
      <MapView
        style={[styles.map]}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: lat, 
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <Marker
          coordinate={{latitude: lat, longitude: lon}}
          title="this is a marker"
          description="this is a marker example"
        /> 
        </MapView>
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;
const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});