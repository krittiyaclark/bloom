import React from 'react';

import Card from '../UI/Card/Card';
import Thumbnail from '../UI/Thumbnail/Thumbnail';

import { StyledPostWrapper } from './Posts.styles';

const PostSummary = ({ postLists }) => {
	console.log(postLists);
	return (
		<Card>
			<StyledPostWrapper>
				<Thumbnail>
					<img src='https://via.placeholder.com/150' alt='thumbnail' />
				</Thumbnail>

				<div className='content'>
					<span>{postLists.title}</span>
					<p>Posted by Pai</p>
					<p>9 November, 9pm</p>
				</div>
			</StyledPostWrapper>
		</Card>
	);
};

export default PostSummary;
