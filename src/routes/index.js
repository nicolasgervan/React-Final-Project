import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import LoginView from './loginView/loginView';
import ArtistView from './artistView/artistView';
import AlbumView from './albumView/albumView';
import FavouriteView from './favouriteView/favouriteView';

const getRoutes = function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={LoginView} />
                <Route component={DefaultContainer}/>
            </Switch>
        </div>
    )
};

const DefaultContainer = () => (
    <div>
        <MainView/>
        <div>
            <Route path="/callback" component={HomeView} />
            <Route path="/artist" component={ArtistView} />
            <Route path="/album" component={AlbumView} />
            <Route path="/favourite" component={FavouriteView} />
        </div>
    </div>
 )

export default getRoutes;
