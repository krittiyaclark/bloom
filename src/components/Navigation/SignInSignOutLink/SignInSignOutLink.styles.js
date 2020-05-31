import styled from 'styled-components';

export const NavigationItemsUL = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-flow: column;
	align-items: center;
	height: 100%;

	@media (min-width: 500px) {
		flex-flow: row;
	}
`;

export const NavigationItemLI = styled.li`
	margin: 10px 0;
	box-sizing: border-box;
	display: block;
	width: 100%;
`;

export const NavigationItemLink = styled.a`
	color: #8f5c2c;
	text-decoration: none;
	width: 100%;
	box-sizing: border-box;
	display: block;
`;
