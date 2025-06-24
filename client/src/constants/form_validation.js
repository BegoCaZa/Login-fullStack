const messages = {
	fullName: {
		required: 'Name is required',
		wrong: 'Wrong format, letters and spaces only'
	},
	email: {
		required: 'Email is required',
		wrong: 'Invalid email format',
		exists: 'This email is already in use'
	},
	dateOfBirth: {
		required: 'Date of birth is required'
	},
	phoneNumber: {
		required: 'Phone number is required',
		wrong: 'Phone must have 10 digits'
	}
};

const patterns = {
	onlyLettersAndSpaces: /^[A-Za-z\s]+$/,
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	phoneNumber: /^\d{10}$/
};

const fullNameValidations = {
	required: messages.fullName.required,
	pattern: {
		value: patterns.onlyLettersAndSpaces,
		message: messages.fullName.wrong
	},
	minLength: {
		value: 2,
		message: 'Name must be at least 2 characters'
	}
};

const emailValidations = {
	required: messages.email.required,
	pattern: {
		value: patterns.email,
		message: messages.email.wrong
	}
};

const dateOfBirthValidations = {
	required: messages.dateOfBirth.required
};

const phoneNumberValidations = {
	required: messages.phoneNumber.required,
	pattern: {
		value: patterns.phoneNumber,
		message: messages.phoneNumber.wrong
	}
};

export const FORM_VALIDATIONS = {
	FULL_NAME: fullNameValidations,
	EMAIL: emailValidations,
	DATE_OF_BIRTH: dateOfBirthValidations,
	PHONE_NUMBER: phoneNumberValidations
};

export { messages };
