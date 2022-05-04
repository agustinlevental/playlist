import React from 'react';
import {SearchBar} from './SearchBar/SearchBar.jsx'
import {SearchResults} from "./SearchResults/SearchResults.jsx"
import {Playlist} from "./Playlist/Playlist.jsx";
import app from "./app.css";
import Spotify from "./Spotify";



export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
  searchResults: [] ,
  playlistName : {name: "My Playlist"},
  playlistTracks:  []
                  
                  }
// --------------------------------- BIND-------------------------------------------

this.addTrack = this.addTrack.bind(this)

  
this.removeTrack= this.removeTrack.bind (this)

this.updatePlaylistName= this.updatePlaylistName (this)
this.savePlaylist = this.savePlaylist.bind (this)
this.search = this.search.bind (this)
// --------------------------------- BIND-------------------------------------------

}

    componentDidMount() {
  window.addEventListener('load', () => {Spotify.getAccessToken()});
 
    }

   

  addTrack (track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(element =>  
     element.id === track.id)) {
      return }

       tracks.push(track)
      this.setState({playlistTracks: tracks})
   
    }; 

    removeTrack (track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(element => element.id !== track.id)

      this.setState ({playlistTracks : tracks})
    }

    updatePlaylistName (name){
       this.setState({playlistName : name})
    }

    savePlaylist () { 
      
      const trackUris = this.state.playlistTracks.map ( track => track.uri) 
      Spotify.savePlaylist(this.state.playlistName, trackUris). then(() => {
        this.setState ( {
          playlistName: "New Playlist" ,
          playlistTracks: []
        })
      })

}

    search(term) { 
     debugger
      Spotify.search(term).then(searchResults => {
       this.setState ({searchResults: searchResults})
      
     
     })
      
    } 

  render() {
  
  return (
    
    <div>

      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">

      <SearchBar onSearch= {this.search}></SearchBar>  
     
      

      <div className="App-playlist">
 <SearchResults searchResults= {this.state.searchResults} onAdd = {this.addTrack}>
   </SearchResults>
   
   <Playlist playlistName={this.state.playlistName} 
   playlistTracks= {this.state.playlistTracks}
    onRemove = {this.removeTrack} 
    tracks= {this.state.searchResults} 
    onNameChange= {this.updatePlaylistName}
    onSave= {this.savePlaylist}> </Playlist>
   

      </div>

      </div>
  
    </div>
    )
    }
    }
    
