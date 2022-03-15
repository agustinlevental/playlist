import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Searchbar from "./Searchbar.css"

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  
  this.state = {
    term: ""
  }

    this.search = this.search.bind (this)
    this.handleTermChange = this.handleTermChange.bind (this)
  }

  search () { 
    this.props.onSearch(this.props.term)
  }

  handleTermChange (event) { 
    this.setState( {term: event.target.value })
  }


render () { return (
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange ={this.handleTermChange} />
  <button className="SearchButton">SEARCH</button>
 </div>
)
  }
 }

