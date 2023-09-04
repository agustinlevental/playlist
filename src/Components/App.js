import React, { useState, useEffect } from 'react';
import './app.css'; // Asegúrate de que la importación del archivo CSS sea correcta
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { SearchResults } from './SearchResults/SearchResults.jsx';
import { Playlist } from './Playlist/Playlist.jsx';
import Spotify from './Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    window.addEventListener('load', () => {
      Spotify.getAccessToken();
    });
  }, []);

  const addTrack = (track) => {
    if (!playlistTracks.some((element) => element.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    const updatedTracks = playlistTracks.filter((element) => element.id !== track.id);
    setPlaylistTracks(updatedTracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  };

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            tracks={searchResults}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

