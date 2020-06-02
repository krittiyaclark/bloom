import React from 'react';

import Logo from '../../assets/images/logo-min.png';
import { StyledLogo, StyledImage } from './Logo.syles';

const logo = (props) => (
	<StyledLogo style={{ height: props.height }}>
		{/* <StyledImage src={Logo} alt='Bloom Logo' /> */}
		<p>Bloom.</p>
	</StyledLogo>
);

export default logo;
