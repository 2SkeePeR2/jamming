import React from 'react';
import {SearchResults} from '../SearchResults/SearchResults'
import './App.css';
import { SeachBar } from "../SearchBar/SearchBar";
import { Playlists } from "../Playlists/Playlists";
import spotify from '../../util/spotify'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {SearchResults:[],
                  playlistName: 'My Playlist',
                  playlistTracks: []
                }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    this.state.playlistTracks.push(track)
    this.setState({playlistTracks: this.state.playlistTracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currtrack => tracks.id!==currtrack.id)
    this.setState({playlistTracks:tracks})
  }

  updatePlaylistName(name){
    this.setState({playListName:name})
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track=>track.uri)
    spotify.savePlaylist(this.state.playlistName, trackUris).then(()=>{
      this.setState({
        playListName: 'New Playlist',
        playlistTracks : []
      })
    })
  }

  search(term){
    spotify.search(term).then(SearchResults => {
      this.setState({SearchResults: SearchResults})
    });
  }

  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SeachBar onSearch={this.search}/>
      <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} onAdd ={this.addTrack}/>
      <Playlists onSave={this.savePlaylist} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
      </div>
      </div>
      </div>
    );
    }
}

export default App;
