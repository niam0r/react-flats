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
            selected={flat.name === props.selectedFlat.name}
            index={index}
            selectFlat={props.selectFlat}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
