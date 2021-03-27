import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './history';

const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
});

let composeEnhancers = compose;
let middleware = [thunk, routerMiddleware(history)];

composeEnhancers = composeWithDevTools;

const enhancers = composeEnhancers(
    applyMiddleware(...middleware)
);

export default createStore(
    rootReducer,
    enhancers
);
