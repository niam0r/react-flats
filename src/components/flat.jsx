import React, { Component } from 'react';

export default class Flat extends Component {
  render() {
    const { imageUrl, price, name } = this.props.flat;
    return (
      <div
        className="card"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')` }}
      >
        <div className="card-category">{price}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}
