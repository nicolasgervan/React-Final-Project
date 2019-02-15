import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artist extends Component {

    render() {
        return(
            <Link to={{ pathname: '/artist', state: { artist: this.props.data } }}>
                <div className="artist-container">
                    <img width="250" src={this.props.data.images[0] ? this.props.data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={this.props.data.name}></img>
                    <div><p>{this.props.data.name}</p></div> 
                </div>   
            </Link>         
        )
    };

}

export default Artist;
