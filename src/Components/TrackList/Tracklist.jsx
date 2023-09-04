import React from 'react';
import './tracklist.css'; 
import { Track } from '../Track/Track.jsx';

function TrackList(props) {
  const { tracks, onAdd, onRemove, isRemoval } = props;

  return (
    <div className="TrackList">
      {tracks.map(elemento => (
        <Track
          key={elemento.key}
          track={elemento}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

export default TrackList;
