import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/searchInput/searchInput';
import logo from '../../assets/spotifylogo.png';

class MainView extends Component {
    render() {
        return (
            <div>
                <div className="main-view">
                    <header className="main-view__header">
                        <img src={logo} width="50" />
                        <h2>Spotisearch</h2>
                    </header>

                    <nav className="navbar navbar-dark bg-dark">
                        <div className="collapse navbar-collapse show">
                            <ul className="nav justify-content-center">
                                <li className="nav-item"><Link to="/">Login</Link></li>
                                <li className="nav-item"><Link to="/callback">Home</Link></li>
                                <li className="nav-item"><Link to="/favourite">My favourite songs</Link></li>
                            </ul>
                        </div>
                    </nav>

                </div>
                <div className="home-view text-center">
                    <p>Search your favourite songs over Spotify,
                        <br></br>just enter an artist's name in the following search box and enjoy!</p>
                    <SearchInput></SearchInput>
                </div>
            </div>
        );
    }
}

export default MainView;
