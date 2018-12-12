import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbumTracks } from '../../api/api'
import store from '../../store.js';
import { setAlbum } from '../../actionCreators.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faPlayCircle, faStar)

const Track = props => {
    return(
        <li id={props.preview} className="list-group-item track-item" onClick={props.handler}>
            <FontAwesomeIcon icon="play-circle" />
            <FontAwesomeIcon icon="star" />
            {props.data.name}
        </li> 
    )
}

class AlbumView extends Component {
    constructor(props){
        super();
        let album = props.location.state.album;
        this.state = {
            tracksList: [],
            album: album,
            preview: 'hola',
            show_preview: 'hide-player',
        }
        store.dispatch(setAlbum(this.state.album));
    }

    componentDidMount(){
        this.getTracks();
    }

    getTracks = () => {
        return fetchAlbumTracks(this.state.album.id)
        .then(data => {
            this.setState({
                tracksList: data.items
            })
            console.log(data);
            
          })
        .catch(error => console.error(error))
    }

    handlerPlayTrack(e){
        this.setState({preview: e.target.id});
        this.setState({show_preview: 'show-player'});
        this.refs.audio_player.load();
        this.refs.audio_player.play();
    }

    render() {
        return (
            <div className="home-view text-center">
                <h2>{this.state.album.name}</h2>
                <ul className="list-group">
                    {this.state.tracksList.map((item,key)=>
                            <Track
                            data={item}
                            key={key}
                            preview={item.preview_url}
                            handler={this.handlerPlayTrack.bind(this)}
                            />
                        )
                    }
                </ul>

                <footer ref="player-fix" id="player-fix" className={this.state.show_preview} ></footer>   

                <footer id="player" ref="player" className={this.state.show_preview} >
                    <audio id="audio_player" ref="audio_player" controls>
                        <source src={this.state.preview} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </footer>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        album: state.album
    };
};

export default connect(mapStateToProps)(AlbumView);
