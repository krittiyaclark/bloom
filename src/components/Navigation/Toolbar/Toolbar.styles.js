import styled from 'styled-components';

export const ToolbarHeader = styled.header`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #57e6e6;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;

	@media (max-width: 499px) {
		.DesktopOnly {
			display: none;
		}
	}
`;

export const ToolbarNav = styled.div`
	${ToolbarHeader}
	height: 100%;
`;

export const ToolbarLogo = styled.div`
	height: 80%;
`;
