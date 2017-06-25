import React from 'react';

const UserList = props => {
	return (
		<div>
			<h2>Users List</h2>
			<ul>
				{
					props.users.map((user) => {
						return (
							<li onClick={props.selectUser.bind(null, user)} key={user.id}>{user.id}</li>
						);
					})
				}
			</ul>
			<button style={{marginBottom: 10}} onClick={props.getUsersFromApi}>Get users from API</button>
			{
				props.usersFromApi.length ? (<div style={{marginBottom: 10}}>Fetched users from API!</div>) : <div></div>
			}
		</div>
	);
};

export default UserList;