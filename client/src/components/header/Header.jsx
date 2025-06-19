import Menu from '../menu/Menu';
import { StyledHeaderContainer, StyledLogoIcon } from './header.styles';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<StyledLogoIcon src='/assets/craft-icone-svg-150px.svg' />
			<Menu />
		</StyledHeaderContainer>
	);
};

export default Header;
