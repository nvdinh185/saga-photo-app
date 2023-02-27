import React from 'react';
import './PhotoCard.scss';

function PhotoCard(props) {
  const { photo } = props;

  return (
    <div className="photo">
      <img src={photo.img} alt={photo.img} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.name}</h3>
      </div>
    </div>
  );
}

export default PhotoCard;