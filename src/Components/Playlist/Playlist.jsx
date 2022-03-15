import React from 'react';
import {TrackList} from '../TrackList/Tracklist';
import playlist from './playlist.css';

export class Playlist extends React.Component {

    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind (this);
    }

    handleNameChange (event) { 
        this.props.OnNameChange(event.target.value)
    }


    render () { return ( <div className="Playlist">
    <input defaultValue= {"New Playlist"} onChange={this.handleNameChange}/>

    < TrackList playlistTracks = {this.props.playlistTracks} onRemove = {this.props.onRemove} isRemoval = {true} 
     tracks= {this.props.playlistTracks}
    > </TrackList> 
  
    <button class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
  </div>
      )
      }
  }