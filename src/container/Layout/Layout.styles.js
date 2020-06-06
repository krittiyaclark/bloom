import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const StyledContainer = styled.div`
	max-width: 1010px;
	width: 100%;
	margin: 20px auto;
	flex-grow: 1;

	@media screen and (min-width: 415px) {
		flex-direction: row;
	}
`;

export const StyledSection = styled.section`
	margin-top: 16px;
`;
