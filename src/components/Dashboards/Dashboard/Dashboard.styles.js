import styled from 'styled-components';

export const StyledDashboardContainer = styled.div`
	margin: auto;
	max-width: 75rem;

	@media screen and (min-width: 640px) {
		display: flex;
	}
`;

export const StyledDashboardSection = styled.section`
	flex: 1;
`;

export const StyledDashboardAside = styled.aside`
	margin: 0 0 0 20px;
	flex: 0 1 300px;
`;
