import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Go get the createStore method from the redux module
import { createStore } from 'redux';

// Import the Propdiver from react-redux so react and redux can talk
import { Provider } from 'react-redux';

// Import the rootReducer so we can give it to the store... fill those shelves!
import reducers from './reducers/rootReducer'

const theStore = createStore(reducers);

// ReactDOM.render takes 2 args... 1. What, 2. Where
ReactDOM.render(
	<Provider store={theStore}>
		<div className="app">
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
);
