import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Trending from './components/trending/Treding'
import Random from './components/random/Random'

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navigation />
        </div>

    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
