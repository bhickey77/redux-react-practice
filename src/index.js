import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const addReducer = (state, action) => {
    console.log(`hey im reducer 1.`);
    console.log(action);
    return {};
}

const subtractReducer = (state, action) => {
    console.log(`hey im reducer 2`);
    return {};
}

const storeInstance = createStore(
    // this is called when the page LOADS or the DISPATCH is called
    combineReducers({
        firstReducer,
        secondReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();