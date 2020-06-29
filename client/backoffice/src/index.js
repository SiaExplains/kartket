// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// REACT , REDUX, THUNK
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from './redux/combined.reducer';
// ETC
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App';

const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.log(`[Middleware] dispatching`, action);
            const result = next(action);
            console.log('[Middleware next state', store.getState());
            return result;
        };
    };
};

const compseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    compseEnhancers(applyMiddleware(loggerMiddleware, thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
