import axios from 'axios';

const selectUser = user => {
	return {
		type: 'SELECT_USER',
		payload: user
	}
},
	getUsersFromApi = () => {
		const request = axios.get('http://jsonplaceholder.typicode.com/users');

		return dispatch => {
			request.then(data => {
				dispatch({ type: 'FETCH_USERS', payload: data.data });
			});
		};
	};

export { selectUser, getUsersFromApi };