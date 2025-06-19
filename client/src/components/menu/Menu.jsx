import { useState } from 'react';

import {
	StyledMenuContainer,
	StyledMenuIconContainer,
	StyledMenuItem,
	StyledOptionsContainer
} from './menu.styles';

const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	console.log(menuOpen);
	const menuIcon = menuOpen
		? '/assets/icon-close.svg'
		: '/assets/icon-hamburger.svg';

	return (
		<StyledMenuContainer>
			<StyledMenuIconContainer
				src={menuIcon}
				onClick={() => setMenuOpen(!menuOpen)}
			/>
			<nav>
				<StyledOptionsContainer $menuOpen={menuOpen}>
					<StyledMenuItem to='/login' onClick={() => setMenuOpen(false)}>
						Login
					</StyledMenuItem>
					<StyledMenuItem to='/register' onClick={() => setMenuOpen(false)}>
						Register
					</StyledMenuItem>
					<StyledMenuItem to='/profile' onClick={() => setMenuOpen(false)}>
						Profile
					</StyledMenuItem>
				</StyledOptionsContainer>
			</nav>
		</StyledMenuContainer>
	);
};
export default Menu;
