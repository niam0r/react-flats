import React, { Component } from 'react';

import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={index}
            selectedFlat={flat.name === props.selectedFlat.name}
            selectFlat={props.selectFlat}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
