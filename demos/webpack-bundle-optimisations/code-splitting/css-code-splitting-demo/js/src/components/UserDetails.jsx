import React from 'react';

const UserDetails = props => {
	const { selectedUser } = props,
		template = selectedUser ? (
			<div>
				You selected <h4 style={{display: 'inline-block', margin: 0}}>{selectedUser.name}</h4>
			</div>
		) : (
			<div>Select a user...</div>	
		);

	return template;
};

export default UserDetails;