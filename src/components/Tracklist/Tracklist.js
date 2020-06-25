import React from 'react';
import './Tracklist.css';
import { Track } from "../Track/Track";

export class Tracklist extends React.Component{
    render(){
        return(
            <div className="TrackList">
                if(this.props.tracks){
                this.props.tracks.map(track=>{return <Track track={track} key={track.id} />})}
            </div>
        )
    }
}