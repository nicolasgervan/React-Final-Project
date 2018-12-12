import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/searchInput/searchInput';

class MainView extends Component {
    render() {
        return (
            <div>
                <div className="main-view">
                    <header className="main-view__header">
                        <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Spotify_icon-icons.com_66783.png" width="50" />
                        <h2>Spotisearch</h2>
                    </header>
                    <nav className="main-view__nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/favourite">My favourite songs</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="home-view text-center">
                    <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                    <SearchInput></SearchInput>
                </div>
            </div>
        );
    }
}

export default MainView;
