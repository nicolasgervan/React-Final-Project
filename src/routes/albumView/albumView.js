import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbumTracks } from '../../api/api'
import store from '../../store.js';
import { setAlbum } from '../../actionCreators.js';
import Track from './track.js'


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

    getTracks() {
        return fetchAlbumTracks(this.state.album.id)
        .then(data => {
            this.setState({
                tracksList: data.items
            })
            console.log(data);
            
          })
        .catch(error => console.error(error))
    }

    handlePlay(e){
        this.setState({preview: e.target.id});
        this.setState({show_preview: 'show-player'});
        this.refs.audio_player.load();
        this.refs.audio_player.play();
    }

    componentDidMount(){
        this.getTracks();
    }

    render() {
        return (
            <div className="home-view text-center">
                <h2>{this.state.album.name}</h2>
                <img height="400" className="album-img" src={this.state.album.images[0] ? this.state.album.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={this.state.album.name}></img>
                <ul className="list-group">
                    {this.state.tracksList.map((item,key)=>
                            <Track
                            data={item}
                            key={key}
                            preview={item.preview_url}
                            id={item.id}
                            handlePlay={this.handlePlay.bind(this)}
                            />
                        )
                    }
                </ul>
                {this.props.loading ? "Loading..." : ""}

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
        album: state.album,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(AlbumView);
