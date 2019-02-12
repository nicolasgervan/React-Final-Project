import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artist extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Link to={{ pathname: '/artist', state: { artist: props.data } }}>
                <div className="artist-container">
                    <img width="250" src={props.data.images[0] ? props.data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={props.data.name}></img>
                    <div><p>{props.data.name}</p></div> 
                </div>   
            </Link>         
        )
    };

}

export default Artist;
