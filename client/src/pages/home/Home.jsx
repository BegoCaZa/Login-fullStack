import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { StyledGeneralContainer } from './home.styles';
import { AuthContext } from '../../lib/contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { getUserName, getUserNameByEmail } from '../../lib/utils/api';

const Home = () => {
	const { user, loading } = useContext(AuthContext);
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (user && user.email) {
			console.log('usuario:', user);
			console.log(' Buscando username por email:', user.email);
			fetchUserName(user.email, setUserName);
		}
	}, [user]);

	if (loading) return <h2>Loading...</h2>;

	return (
		<StyledGeneralContainer>
			<Header />
			<h2>HOLA {userName}</h2>
			{user && <button onClick={() => logout(navigate)}>LogOut</button>}
		</StyledGeneralContainer>
	);
};

const logout = async navigate => {
	await signOut(auth);
	navigate('/'); //navego a la pagina de inicio
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

export default Home;
