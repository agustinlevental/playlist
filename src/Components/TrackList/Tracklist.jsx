import React from 'react';
import {Track} from "../Track/Track.jsx";
import tracklist from "./tracklist.css";



export class TrackList extends React.Component {
    

  
  render() { 
    return ( 
           console.log(this.props),
      <div className="TrackList">
               
          
       
 
         { this.props.tracks.map(elemento => {
                    
                        return  <Track key= {elemento.key} track={elemento} onAdd = {this.props.onAdd} onRemove = {this.props.onRemove} isRemoval = {this.props.isRemoval}/>
                    }) }   
                        
                    
                                            
               

                       
      </div> 
            
                      
            )
                  
            }
                 
            }
   