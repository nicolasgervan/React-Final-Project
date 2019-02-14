import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.js';
import { setToken } from '../../actionCreators.js';
import Artist from '../../components/Artist/Artist';

class HomeView extends Component {
    constructor(props){
        super();
        this.state = {
            token: '',
            artistSearchList: []
        }
        if(props.location && props.location.hash){
            const queryString = require('query-string');
            var parsed = queryString.parse(props.location.hash);
            console.log(parsed);
            const token = parsed.access_token;
            if(token){
                sessionStorage.setItem('token', token);
                store.dispatch(setToken(token));
            }
        }
    }
    render() {
        return (
            <div className="home-view text-center">
                {this.props.loading ? <div>Loading...</div> : ""}
                {this.props.artistSearchList.map((item,key)=>
                    <Artist
                    data={item}
                    key={key}
                    />
                )}          
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistSearchList: state.artistSearchList,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(HomeView);
