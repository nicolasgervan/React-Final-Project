import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../store.js';
import { setToken } from '../../actionCreators.js';

const Artist = props => {
    return(
        <Link to={{ pathname: '/artist', state: { artist: props.data } }}>
            <div className="artist-container">
                <img width="250" src={props.data.images[0] ? props.data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={props.data.name}></img>
                <div><p>{props.data.name}</p></div> 
            </div>   
        </Link>         
    )
}

class HomeView extends Component {
    constructor(props){
        super();
        this.state = {
            token: '',
            artistSearchList: []
        }
        const queryString = require('query-string');
        var parsed = queryString.parse(props.location.hash);
        console.log(parsed);
        const token = parsed.access_token;
        if(token){
            sessionStorage.setItem('token', token);
            store.dispatch(setToken(token));
        }
    }
    render() {
        return (
            <div className="home-view text-center">
                {this.props.artistSearchList.map((item,key)=>
                        <Artist
                        data={item}
                        key={key}
                        />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistSearchList: state.artistSearchList
    };
};

export default connect(mapStateToProps)(HomeView);
