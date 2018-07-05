import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';
import flats from '../data/flats.js';
import Marker from './marker.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    // console.log(selectedFlat);
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDX7i2xCGzU01SvWjH_p0BhWEgPBR5sf_8' }}
            center={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
              // text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
