import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { StyledGeneralContainer } from './home.styles';
import { AuthContext } from '../../lib/contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const Home = () => {
	const { user, loading } = useContext(AuthContext);
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate('/login');
	}, [navigate, user]);

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

export default Home;
