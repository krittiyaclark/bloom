import React from 'react';

import { StyledThumbnailContainer } from './Thumbnail.styles';

const thumbnail = (props) => {
	return <StyledThumbnailContainer>{props.children}</StyledThumbnailContainer>;
};

export default thumbnail;
