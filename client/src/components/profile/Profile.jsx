import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../lib/contexts/authContext';
import { getUserNameByEmail } from '../../lib/utils/api';

const Profile = () => {
	const { user, loading } = useContext(AuthContext);
	const [userName, setUserName] = useState('');

	useEffect(() => {
		if (user && user.email) {
			fetchUserName(user.email, setUserName);
		}
	}, [user]);

	if (loading) return <h2>Loading...</h2>;
	return (
		<div>
			<h1>Profile Page</h1>
			<p>Hello {userName}</p>
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
