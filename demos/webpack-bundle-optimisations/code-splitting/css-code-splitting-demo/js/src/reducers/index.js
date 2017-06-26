import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const allReducers = combineReducers({
	users: usersReducer
});

export default allReducers;