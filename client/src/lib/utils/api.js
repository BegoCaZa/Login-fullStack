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

export const getUserName = async email => {
	try {
		const response = await fetch(URL_BASE + URL_API + id);
		console.log('URL:', URL_BASE + URL_API + id);
		if (response.ok) {
			const data = await response.json();
			console.log('Datos:', data);
			return data.userName;
		} else {
			throw new Error('Error al obtener el nombre de usuario');
		}
	} catch (error) {
		throw new Error(
			'Error en la obtención del nombre de usuario: ' + error.message
		);
	}
};

export const getUserNameByEmail = async email => {
	try {
		const response = await fetch(URL_BASE + URL_API + email);
		console.log('URL:', URL_BASE + URL_API + email);
		console.log('Response status:', response.status);

		if (response.ok) {
			const data = await response.json();
			console.log('Datos recibidos:', data);
			return data.userName;
		} else {
			const errorData = await response.text();
			console.log('Error response:', errorData);
			throw new Error('Error al obtener el nombre de usuario');
		}
	} catch (error) {
		throw new Error(
			'Error en la obtención del nombre de usuario: ' + error.message
		);
	}
};

export const updateNameByEmail = async (email, body) => {
	try {
		const response = await fetch(URL_BASE + URL_API + email, {
			method: 'PATCH',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
