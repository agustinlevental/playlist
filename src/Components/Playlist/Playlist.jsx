import React from 'react';
import {TrackList} from '../TrackList/Tracklist';
import playlist from './playlist.css';

export class Playlist extends React.Component {
    render () { return ( <div className="Playlist">
    <input defaultValue= {"New Playlist"}/>

    < TrackList Tracks = {this.props.playlistTracks} onRemove = {this.props.removeTrack} isRemoval = {true}> </TrackList> 
  
    <button class="Playlist-save">SAVE TO SPOTIFY</button>
  </div>
      )
      }
  }