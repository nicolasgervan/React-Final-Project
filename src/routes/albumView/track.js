import React, { Component } from 'react';
import store from '../../store.js';
import { addFav, removeFav } from '../../actionCreators.js';

class Track extends Component {
    constructor(props){
        super();
        this.state = {
            id: props.id,
            className: sessionStorage.getItem(props.id) === 'true' ? 'star-icon-fav' : 'star-icon'
        }
    }
    

    handleFav(e){
        e.stopPropagation();
        if(sessionStorage.hasOwnProperty(e.target.id)){

            if(sessionStorage.getItem(e.target.id) === 'true'){
              sessionStorage.setItem(e.target.id, 'false');
              this.setState({'className': 'star-icon'});
            }else{   
              sessionStorage.setItem(e.target.id, 'true');
              this.setState({'className': 'star-icon-fav'});
            }
      
          }else{    
            sessionStorage.setItem(e.target.id, 'true');
            this.setState({'className': 'star-icon-fav'});
          };
    }

    render() {
        return(
            <li className="list-group-item track-item" onClick={this.props.handlePlay}>
                <i id={this.props.preview} className="far fa-play-circle play-icon"></i>
                <span className="song-name">{this.props.data.name}</span>  
                <i id={this.props.id} className={"far fa-star " + this.state.className} onClick={this.handleFav.bind(this)} title="Add/Remove favourite"></i>     
            </li> 
        )}
}

export default Track;