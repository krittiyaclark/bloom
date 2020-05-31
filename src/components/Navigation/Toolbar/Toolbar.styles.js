import styled from 'styled-components';

export const ToolbarHeader = styled.header`
	background-color: #57e6e6;
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
	padding: 26px 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 499px) {
		.DesktopOnly {
			display: none;
		}
	}
`;

export const ToolbarNav = styled.div`
	height: 56px;
	width: 100%;

	max-width: 1010px;
	margin: 0 auto;
	position: fixed;

	display: flex;
	align-items: center;
	padding: 0 20px;
	/* top: 0;
	left: 0;
	/* background-color: #57e6e6; */
	/* display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	/* z-index: 90; */
`;

export const ToolbarLogo = styled.div`
	height: 80%;
`;

// Adding ToolbarLeft & ToolbarRight
export const ToolbarLeft = styled.div`
	width: 33.333%;
	text-align: left;
`;

export const ToolbarCenter = styled.div`
	width: 33.333%;
	text-align: center;
`;

export const ToolbarRight = styled.div`
	width: 33.333%;
	text-align: right;

	svg {
		margin-right: 20px;
	}
`;
