import React, { Component } from 'react';
import { fetchSearchArtists } from '../../api/api'
import store from '../../store.js';
import { artistsList } from '../../actionCreators.js';
import history from '../../history.js';

class SearchInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            artistSearchList: [],
            filterArtist: ''
        }

        this.handleSearchArtists = this.handleSearchArtists.bind(this);
        this.handleSearchValue = this.handleSearchValue.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    render() {
        return (
            <div className="btn-search-box input-group">
                <input type="text" className="form-control" id="searchArtistInput" onChange={this.handleSearchValue} onKeyPress={this.handleEnter}></input>
                <span className="input-group-btn">
                    <button className="btn btn-default btn-search" type="button" onClick={this.handleSearchArtists} onKeyPress={this.handleEnter.bind(this)}>Search!</button>
                </span>
            </div>
        );
    };

    handleEnter(e){
        if(e.key === 'Enter'){
            this.handleSearchArtists(e);
        }
    }

    handleSearchArtists(e){
        return fetchSearchArtists(this.state.filterArtist)
        .then(data => {
            store.dispatch(artistsList(data.artists.items));
            history.push('/callback');
          })
        .catch(error => console.error(error))
    };

    handleSearchValue(e){
        this.setState({
            filterArtist: e.target.value
        });
    };
}

export default SearchInput;
