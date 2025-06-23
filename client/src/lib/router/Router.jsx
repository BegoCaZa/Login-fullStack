import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';

import LoginPage from '../../pages/login/LoginPage';
import RegisterPage from '../../pages/register/RegisterPage';
import ProfilePage from '../../pages/profile/ProfilePage';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
		</>
	);
};

export default Router;
