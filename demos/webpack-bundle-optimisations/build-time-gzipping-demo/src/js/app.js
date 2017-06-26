import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import users from './initUsers';
import thunk from 'redux-thunk';
import logger from './middleware/logger';

const initialState = { users: { all: [], usersFromApi: [], selected: null } };

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
);
const store = createStore(allReducers, initialState, enhancer);

store.dispatch({ type: 'INIT_STORE', payload: users });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('app'));