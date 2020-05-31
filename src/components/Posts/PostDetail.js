import React from 'react';

const PostDetail = (props) => {
	const id = props.match.params.id;
	return (
		<div className='project-list section'>
			<div className='project-list section'>
				<span>Project Titile</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</p>
				<p>Posted by Pai</p>
				<p>9 November, 9pm: {id}</p>
			</div>
		</div>
	);
};

export default PostDetail;
