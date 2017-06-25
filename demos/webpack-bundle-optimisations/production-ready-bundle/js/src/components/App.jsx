import React from 'react';
import UserListContainer from '../containers/userListContainer';
import UserDetailsContainer from '../containers/userDetailsContainer';

const App = () => {
	return (
		<div>
			<UserListContainer />
			<UserDetailsContainer />
		</div>
	);
};

export default App;