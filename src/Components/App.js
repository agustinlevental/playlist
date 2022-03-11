import React from 'react';
import {SearchBar} from './SearchBar/SearchBar.jsx'
import {SearchResults} from "./SearchResults/SearchResults.jsx"
import {Playlist} from "./Playlist/Playlist.jsx";
import app from "./app.css";

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { searchResults: [{
      name: "name1" ,
      artist: "artist1" ,
      album: "album1" ,
      id: "1"
    },
    {
      name: "name2" ,
      artist: "artist2" ,
      album: "album2" ,
      id: "2"
    },
    {
      name: "name3" ,
      artist: "artist3" ,
      album: "album3" ,
      id: "3"
    }
  ] ,
  playlistName : {name: "My Playlist"},
  playlistTracks:  [
    {
    name: "PlaylistName 1",
    artist: "PlaylistArtist 1",
    album: "PlaylistAlbum 1",
    id: "4" } ,

    {
      name: "PlaylistName 2",
      artist: "PlaylistArtist 2",
      album: "PlaylistAlbum 2",
      id: "5" } ,

      {
        name: "PlaylistName 3",
        artist: "PlaylistArtist 3",
        album: "PlaylistAlbum 3",
        id: "6" } ,

       
]
  
}
this.addTrack = this.addTrack.bind(this)
// Bindeas el metodo que agregas usando this. al principio y como argumento!!!
  
this.removeTrack= this.removeTrack.bind (this)
}

  addTrack (track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(element =>  
     element.id === track.id)) {
      return }

      else {tracks.push(track)} 
      this.setState({playlistTracks: tracks})
      // dentro del metodo add track actualiza el estado,  sigue siendo el mismo estado this,state,playlistTrack pero actualizado
      // despues de cargarle un track
    }; 

    removeTrack (track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(element => element.id !== track.id)

      this.setState ({playlistTracks : tracks})
    }



  render() {
  return (
    <div>

      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">

      <SearchBar></SearchBar>
      

      <div className="App-playlist">
 <SearchResults searchResults= {this.state.searchResults} onAdd = {this.addTrack}>
   </SearchResults>
   
   <Playlist playlistName={this.state.playlistName} 
   playlistTracks= {this.state.playlistTracks} onRemove = {this.removeTrack}> </Playlist>
   

      </div>

      </div>
  
    </div>
    )
    }
    }
