import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_lists.jsx';
import flats from '../data/flats.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}
