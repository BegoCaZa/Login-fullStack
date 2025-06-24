import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../lib/contexts/authContext';
import { getUserNameByEmail } from '../../lib/utils/api';
import { useNavigate } from 'react-router-dom';
import EditingPage from '../editingPage/EditingPage';

const Profile = () => {
	const { user, loading, setUser } = useContext(AuthContext);
	const [userName, setUserName] = useState('');
	const [editingPage, setEditingPage] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (user && user.email) {
			fetchUserName(user.email, setUserName);
		}
	}, [user]);

	if (loading) return <h2>Loading...</h2>;
	return (
		<div>
			<h1>Profile Page</h1>
			<h2>Hello {userName}</h2>
			{!editingPage ? (
				<p>{user.email}</p>
			) : (
				<EditingPage
					user={user}
					setEditingPage={setEditingPage}
					email={user.email}
					setUser={setUser}
				/>
			)}
			<button onClick={() => setEditingPage(!editingPage)}>EDIT NAME</button>
			<button onClick={() => navigate('/')}>BACK TO HOME</button>
		</div>
	);
};

const fetchUserName = async (email, setUserName) => {
	try {
		const name = await getUserNameByEmail(email);
		setUserName(name);
		console.log('Nombre del usuario obtenido:', name);
	} catch (error) {
		console.error('Error obteniendo el nombre del usuario:', error.message);
	}
};
export default Profile;
