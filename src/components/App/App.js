import React from 'react';
import {SearchResults} from '../SearchResults/SearchResults'
import './App.css';
import { SeachBar } from "../SearchBar/SearchBar";
import { Playlists } from "../Playlists/Playlists";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {SearchResults:[{name: 'name1', artist: 'artist1', album:'album1', id:1},{name: 'name2', artist: 'artist2', album:'album2', id:2},{name: 'name3', artist: 'artist3', album:'album3', id:3}]}
  }

  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SeachBar />
      <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults}/>
      <Playlists />
      </div>
      </div>
      </div>
    );
    }
}

export default App;
