import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const counterReducer = (state = 0, action) => {
    if(action.type === 'ADD'){
        console.log(`hey im reducer add.`);
        console.log(state + 1);
        return state + 1;
    }
    if(action.type === 'SUBTRACT'){
        console.log(`hey im reducer subtract.`);
        console.log(state - 1);
        return state - 1;
    }
    return state;
}

const subtractReducer = (state, action) => {
    console.log(`hey im reducer 2`);
    return {};
}

const storeInstance = createStore(
    // this is called when the page LOADS or the DISPATCH is called
    combineReducers({
        counterReducer,
        subtractReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();