import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import AppStore from "./store/AppStore";


import * as serviceWorker from './serviceWorker';
import App from './App';

const appStore = new AppStore();
const routingStore = new RouterStore();

const browserHistory = require('history').createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);




ReactDOM.render(
    <Provider appStore={appStore}
              routingStore={routingStore}
    >
        <Router history={history}>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
