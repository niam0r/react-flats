import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.imageUrl}
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
