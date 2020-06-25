import React from 'react';
import './Playlists.css';
import {Tracklist} from '../Tracklist/Tracklist';

export class Playlists extends React.Component{
    render(){
        return(
            <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <Tracklist />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}