import React from 'react';
import './Searchresults.css'; 
import { TrackList } from '../TrackList/Tracklist.jsx';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;

