import React from 'react';

import { StyledMain } from '../Layout/Layout.styles';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
	<>
		<Toolbar />
		<StyledMain>{props.children}</StyledMain>
	</>
);

export default layout;
