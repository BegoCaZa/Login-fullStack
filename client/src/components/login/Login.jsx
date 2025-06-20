import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../lib/contexts/authContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
	const { user, loading } = useContext(AuthContext);

	const navigate = useNavigate();

	console.log(user);

	useEffect(() => {
		if (user) navigate('/');
	}, [navigate, user]);

	if (loading) return <h2>Loading...</h2>;

	return (
		<>
			<h2>LogIn</h2>
			<form onSubmit={loginUser}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' />
				</div>
				<input type='submit' value='LOGIN' />
			</form>
			<p>
				Don't have an account?
				<button onClick={() => navigate('/register')}>Sign Up</button>
			</p>
		</>
	);
};

const loginUser = async event => {
	event.preventDefault();
	const formData = event.target;
	const email = formData.email.value;
	const password = formData.password.value;
	const userName = formData.name.value;

	if (!email || !password || !userName) return;

	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
	}
};
export default LogIn;
