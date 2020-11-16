/* global google */

import React from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const Map = (props) => {
    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.0522, lng: -118.2437 },
        zoom: 8,
      });
      function addMarker(earthquake) {  
        new google.maps.Marker({
            position: { lat: earthquake.geometry.coordinates[1], lng: earthquake.geometry.coordinates[0] },
            map: map,
          });
      }
      props.earthquakes.features !== undefined &&
      (props.earthquakes.features).forEach(addMarker)
      });
  
    return (
      <div id="map"></div>
    );
  }

  
const loader = new Loader({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg",
  version: "weekly",
});


export default Map;