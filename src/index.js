import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import getRoutes from './routes/';
import store from './store.js';
import { Provider } from 'react-redux';
import history from './history.js';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {getRoutes()}
        </Router>
    </Provider>,
    document.getElementById('root')
);
