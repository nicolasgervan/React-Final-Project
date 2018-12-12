import React, { Component } from 'react';

class LoginView extends Component {
	constructor () {
    	super();
    	this.handleClick = this.handleClick.bind(this);
    	this.client_id = '8b3bc08d24aa40638162ab1b4ef716a9';
    	//this.client_secret = 'ae460ecf66af4c3f91001a990decd3e3';
        this.redirect_uri = 'http://localhost:3000/callback';
    	this.response_type = 'token';
    	this.scope = 'user-read-private user-read-email';
  	}
  	handleClick () {
  		
      let url = 'https://accounts.spotify.com/authorize?client_id='+this.client_id+'&redirect_uri='+this.redirect_uri+'&scope='+this.scope+'&response_type='+this.response_type+'&state=123';
      console.log(url);
      window.location.href = url;
	}
    render() {
        return (
            <div className="text-center">
                <p>First you need to log into your Spotify account</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleClick}
                    >Log in with Spotify
                </button>
            </div>
        );
    }
}

export default LoginView;