import React, { Component } from 'react';

import Flat from './flat.jsx';

export default class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {console.log(this.props.flats)}
      </div>
    );
  }
}
