import React from 'react';
import './track.css'; 

function Track(props) {
  const { track, onRemove, onAdd, isRemoval } = props;

  const removeTrack = () => {
    onRemove(track);
  }

  const addTrack = () => {
    onAdd(track);
  }

  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action" onClick={removeTrack}>-</button>
    } else {
      return <button className="Track-action" onClick={addTrack}>+</button>
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;

