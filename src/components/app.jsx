import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';
import flats from '../data/flats.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    }
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    console.log(selectedFlat);
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

        </div>
      </div>
    );
  }
}
