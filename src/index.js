import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Go get the createStore method from the redux module
// We also need applyMiddleware from Redux if we are going to use Middleware
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// Import the Propdiver from react-redux so react and redux can talk
import { Provider } from 'react-redux';

// Import the rootReducer so we can give it to the store... fill those shelves!
import RootReducer from './reducers/rootReducer'

// const theStore = createStore(RootReducer);
// console.log(theStore);
// Make a store that uses Middleware
// applyMiddleware takes an arg (all the Middleware to be used) which returns a function that takes 1 arg, createStore
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const theStore = createStoreWithMiddleware(RootReducer);

// ReactDOM.render takes 2 args... 1. What, 2. Where
ReactDOM.render(
	<Provider store={theStore}>
		<div className="app">
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
);
