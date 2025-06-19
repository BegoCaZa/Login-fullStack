import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 40px 30px;
	margin: 0;
	background-color: transparent;
	position: relative;

	@media (min-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		backdrop-filter: blur(10px);
	}
`;

export const StyledLogoIcon = styled.img`
	width: 50px;
	height: 50px;
	cursor: pointer;
`;
