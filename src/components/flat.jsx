import React, { Component } from 'react';

export default class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    const { imageUrl, lat, lng, name, price, priceCurrency  } = this.props.flat;
    return (
      <div
        className={`card${this.props.selected ? ' active' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')` }}
      >
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}
