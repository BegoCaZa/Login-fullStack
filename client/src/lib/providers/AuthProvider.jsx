import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/authContext';
import { auth } from '../config/firebase.config';

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	// const [name, setName] = useState('');

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setLoading(true);
			if (user) {
				setUser(user);
				// try {
				// 				// Puedes hacer una verificación previa si ya existe
				// 				await createUser({
				// 					uid: user.uid,
				// 					email: user.email,
				// 					userName: userName // o desde localStorage si lo guardaste temporalmente
				// 				});
				// 			} catch (error) {
				// 				console.log('Error creando usuario desde el contexto:', error.message);
				// 			}
				console.log('User is signed in:', user.email);
			} else {
				setUser(null);

				console.log('No user');
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
