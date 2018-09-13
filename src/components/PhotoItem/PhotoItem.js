import PropTypes from 'prop-types';
import React from 'react';
import './PhotoItem.css';

function PhotoItem(props) {

	return (
		<div className='PhotoItem'>
			<div className ='PhotoItem__img'>
				<img
					alt={ props.content.name}
					src={ props.content.img }
				/>
			</div>
		</div>
	);
}

PhotoItem.propTypes = {
	content: PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	})
}

export default PhotoItem;