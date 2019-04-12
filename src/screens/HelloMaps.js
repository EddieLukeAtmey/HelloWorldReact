'use strict';

import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class HelloMaps extends Component {

  // location state
  constructor(props) {
    super(props);
    this.state = { coord: null }
  }

  componentDidMount() {
    this.requestCurrentLocation()
  }

  requestCurrentLocation() {
    // https://facebook.github.io/react-native/docs/permissionsandroid
    if (!hasLocationPermission) { return }

    options = { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    this.watchID = Geolocation.watchPosition(
      (position) => { // success callback
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
        console.log(position);
        this.setState(position.coords, () => {
          console.log(this.state)
        })
      },
      (error) => { // error callback
        // See error code charts below.
        console.log(error.code, error.message);
      },
      options);
  }

  render() {

    if (!this.state.lastLong && !this.state.lastLat) {
      return null;
    }

    return (
      <MapView provider={PROVIDER_GOOGLE} customMapStyle={MapStyle}>
      </MapView>
    );
  }
}
