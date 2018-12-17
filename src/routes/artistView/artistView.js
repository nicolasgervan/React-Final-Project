import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtistAlbums } from '../../api/api'
import store from '../../store.js';
import { setArtist } from '../../actionCreators.js';
import { Link } from 'react-router-dom';

const Album = props => {
    return(
        <Link to={{ pathname: '/album', state: { album: props.data } }}>
            <div className="artist-container">
                <img height="250" src={props.data.images[0] ? props.data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={props.data.name}></img>
                <div><p>{props.data.name}</p></div> 
            </div>            
        </Link>
    )
}

class ArtistView extends Component {
    constructor(props){
        super();
        let artist = props.location.state.artist;
        this.state = {
            artist: artist,
            albumsList: []
        }
        store.dispatch(setArtist(this.state.artist));
    }

    componentDidMount(){
        this.getAlbums();
    }

    getAlbums = () => {
        return fetchArtistAlbums(this.state.artist.id)
        .then(data => {
            this.setState({
                albumsList: data.items
            })
            console.log(data);
            
          })
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="home-view text-center">
            <h2>{this.state.artist.name}</h2>
                {this.state.albumsList ? this.state.albumsList.map((item,key)=>
                        <Album
                        data={item}
                        key={key}
                        />
                    )
                : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artist: state.artist
    };
};

export default connect(mapStateToProps)(ArtistView);
