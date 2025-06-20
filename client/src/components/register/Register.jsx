import { useContext, useEffect } from 'react';
import { auth } from '../../lib/config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../lib/contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../lib/utils/api';

const Register = () => {
	const { user } = useContext(AuthContext);

	const navigate = useNavigate();

	console.log(user);

	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={event => handleSignUp(event, user)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input type='email' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input type='password' name='password' />
				</div>

				<button type='submit'>Sign Up</button>
			</form>
			<p>
				Already have an account?
				<button onClick={() => navigate('/login')}>Log In</button>
			</p>
		</div>
	);
};

const handleSignUp = async (event, user) => {
	event.preventDefault();
	const formData = event.target;
	const email = formData.email.value;
	const password = formData.password.value;
	const userName = formData.name.value;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		const userData = {
			uid: user.uid,
			email: email,
			userName: userName
		};
		await createUser(userData);
		console.log('usuario registrado correctamente');
	} catch (error) {
		console.log(error);
	}
};

export default Register;
