import styled from 'styled-components';

export const StyledContainer = styled.div`
	max-width: 1010px;
	width: 100%;
	margin: 20px auto;

	@media screen and (min-width: 415px) {
		flex-direction: row;
	}
`;

export const StyledSection = styled.section`
	margin-top: 16px;
`;
