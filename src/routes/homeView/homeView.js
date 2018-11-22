import React, { Component } from 'react';
import SearchInput from '../searchInput/searchInput'

const Artist = props => {
    return(
        <div>
            <img src={props.img}></img>
            <p>{props.name}</p>
        </div>
    )
}

class HomeView extends Component {
    render() {
        return (
            <div className="home-view text-center">
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <SearchInput></SearchInput>
                <Artist data={this.props.artist}></Artist>
            </div>
            
        );
    }
}

export default HomeView;
