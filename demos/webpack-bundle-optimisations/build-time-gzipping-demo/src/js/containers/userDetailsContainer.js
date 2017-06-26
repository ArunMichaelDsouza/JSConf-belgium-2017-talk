import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails.jsx';

const mapStateToProps = state => {
	return {
		selectedUser: state.users.selected
	}
};

export default connect(mapStateToProps)(UserDetails);

