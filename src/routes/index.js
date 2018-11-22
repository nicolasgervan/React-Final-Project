import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import FavouriteView from './favouriteView/favouriteView';

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/favourite" component={FavouriteView} />
            </Switch>
        </div>
    )
};

export default getRoutes;
