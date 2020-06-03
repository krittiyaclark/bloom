import React from 'react';

import PostSummary from './PostSummary';
// import { Link } from 'react-router-dom';

const ProjectList = ({ postLists }) => {
	console.log(postLists);
	return (
		<>
			{postLists &&
				postLists.map((post) => {
					return <PostSummary key={post.id} postLists={post} />;
				})}
		</>
	);
};

export default ProjectList;
