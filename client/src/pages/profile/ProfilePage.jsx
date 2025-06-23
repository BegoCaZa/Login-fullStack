import { useNavigate } from 'react-router-dom';
import Profile from '../../components/profile/Profile';
import { useContext } from 'react';
import { AuthContext } from '../../lib/contexts/authContext';

const ProfilePage = () => {
	const navigate = useNavigate();
	const { user, loading } = useContext(AuthContext);

	if (loading) return <h2>Loading...</h2>;
	return (
		<>
			{!user && (
				<div>
					<h2>You must be logged in to view this page</h2>
					<button onClick={() => navigate('/')}>Go to Home</button>
				</div>
			)}
			{user && <h2>Welcome, {user.email}</h2>}
			{/* <Profile /> */}
		</>
	);
};

export default ProfilePage;
