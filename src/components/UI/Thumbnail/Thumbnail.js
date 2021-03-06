import React from 'react';

import { StyledThumbnailContainer } from './Thumbnail.styles';

const Thumbnail = (props) => {
	return <StyledThumbnailContainer>{props.children}</StyledThumbnailContainer>;
};

export default Thumbnail;
