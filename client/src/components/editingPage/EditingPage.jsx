import { useForm } from 'react-hook-form';
import { updateNameByEmail } from '../../lib/utils/api';
import { FORM_VALIDATIONS } from '../../constants/form_validation';

const EditingPage = ({ user, setEditingPage, email, setUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			userName: user.userName,
			email: user.email
		}
	});

	//aqui valido y espero la info
	const onSubmit = async data => {
		const updatedUser = await updateNameByEmail(email, data); //le mando esta info
		setUser(updatedUser);
		setEditingPage(false); //cierra el editor
		console.log(updatedUser);
		//guarda pero no actualiza el api
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>NAME</label>
					<input
						type='text'
						{...register('userName', FORM_VALIDATIONS.FULL_NAME)}
					/>
					{errors.fullName && <span>{errors.fullName.message}</span>}
				</div>

				<button type='submit'>SAVE USER</button>
			</form>
		</div>
	);
};
export default EditingPage;
