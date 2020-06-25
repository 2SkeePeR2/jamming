import React from 'react';
import './Tracklist.css';
import { Track } from "../Track/Track";

export class Tracklist extends React.Component{
    render(){
        let xyz = null
        if(this.props.tracks){
            xyz = this.props.tracks.map(track=>{return <Track track={track} key={track.id} />})
        }
        return(
            <div className="TrackList">
                {xyz}
            </div>
        )
    }
}