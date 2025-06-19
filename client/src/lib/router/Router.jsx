import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import LoginPage from '../../pages/login/LoginPage';
import RegisterPage from '../../pages/register/RegisterPage';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</>
	);
};

export default Router;
