import PropTypes from 'prop-types';
import React from 'react';
import './Item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faComment,
	faEye
} from '@fortawesome/free-regular-svg-icons';

function Item(props) {

	return (
		<div className='Item'>
			<img
				alt={ props.content.name}
				src={ props.content.img }
			/>
			<div className='Item__description'>
				<div className='Item__name'>
					{ props.content.name }
				</div>
				<div className='Item__stats'>
					<FontAwesomeIcon icon={ faClock } />
					{ props.content.cookingTime } mins |{' '}
					<FontAwesomeIcon icon={ faComment } />
					{ props.content.comments }
					<FontAwesomeIcon icon={ faEye } />
					{ props.content.watched }
				</div>
			</div>
		</div>
	);
}

Item.propTypes = {
	content: PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		comments: PropTypes.number.isRequired,
		cookingTime: PropTypes.number.isRequired,
		watched: PropTypes.number.isRequired,
	})
}

export default Item;