const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/users/';

export const getAllUser = async () => {
	try {
		const response = await fetch(URL_BASE + URL_API);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			return [];
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const createUser = async userData => {
	try {
		const response = await fetch(URL_BASE + URL_API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			const error = await response.json();
			throw new Error(error.message || 'Error al crear el usuario');
		}
	} catch (error) {
		throw new Error('Error en la creación del usuario: ' + error.message);
	}
};
