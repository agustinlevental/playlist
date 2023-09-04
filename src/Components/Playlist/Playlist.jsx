import React from 'react';
import { TrackList } from '../TrackList/Tracklist';
import './playlist.css'; 

function Playlist(props) {
  const { OnNameChange, playlistTracks, onRemove, onSave } = props;

  const handleNameChange = (event) => {
    OnNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" onChange={handleNameChange} />

      <TrackList
        playlistTracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
        tracks={playlistTracks}
      />

      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
