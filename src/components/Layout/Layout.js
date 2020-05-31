import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import { StyledSection, StyledContainer } from '../Layout/Layout.styles';

import Footer from '../Footer/Footer';

const layout = (props) => (
	<>
		<Toolbar />
		<StyledContainer>
			<StyledSection>{props.children}</StyledSection>
		</StyledContainer>
		<Footer />
	</>
);

export default layout;
