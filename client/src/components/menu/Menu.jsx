import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link>Login</Link>
					</li>
					<li>
						<Link>Register</Link>
					</li>
					<li>
						<Link>Profile</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default Menu;
