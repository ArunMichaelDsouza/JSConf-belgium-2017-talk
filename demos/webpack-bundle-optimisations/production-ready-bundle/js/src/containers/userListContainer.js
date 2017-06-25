import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/UserList.jsx';
import { selectUser, getUsersFromApi } from '../actions/userActions';

const mapStateToProps = state => {
	return {
		users: state.users.all,
		usersFromApi: state.users.usersFromApi
	}
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		selectUser,
		getUsersFromApi
	}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(UserList);

