import React from 'react';

import ImagesLogo from '../../assets/images/logo-min.png';
import { StyledLogo, StyledImage } from './Logo.syles';

const Logo = (props) => (
	<StyledLogo style={{ height: props.height }}>
		{/* <StyledImage src={Logo} alt='Bloom Logo' /> */}
		<p>Bloom.</p>
	</StyledLogo>
);

export default Logo;
