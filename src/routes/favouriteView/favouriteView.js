import React, { Component } from 'react';
import Track from '../albumView/track.js';
import { fetchFavTracks } from '../../api/api';

class FavouriteView extends Component {
    constructor(){
        super();   
        this.state = {
            tracksList: []
        }
    }

    getFavTracks() {
        let keys = Object.keys(sessionStorage);
        keys = keys.filter(item => sessionStorage.getItem(item) === 'true');
        if(keys.length > 0){
            fetchFavTracks(keys)
            .then(data => {
                this.setState({'tracksList' : data.tracks})
                console.log(data);         
              })
            .catch(error => console.error(error))
        }   
    }

    componentDidMount(){
        this.getFavTracks();
    }

    render() {    
        return (
            <div className="home-view text-center">
            <h2>My favourite songs</h2>
                {this.state.tracksList.length > 0 ? this.state.tracksList.map((item,key)=>
                        <Track
                        data={item}
                        key={key}
                        preview={item.preview_url}
                        id={item.id}
                        />
                    )
                : 'There are no favourite songs to show'}
            </div>
        );
    }
}


export default FavouriteView;
