import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';
import flats from '../data/flats.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: null
    }
  }
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} />
          <Flat flat={this.state.flats[0]}/>
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}
