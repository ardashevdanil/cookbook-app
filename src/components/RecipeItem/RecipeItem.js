import PropTypes from 'prop-types';
import React from 'react';
import './RecipeItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
} from '@fortawesome/free-regular-svg-icons';

function RecipeItem(props) {

	let handleClick = () => {
		props.history.push(`/cookbook-app/recipe/${props.content.id}`);
		window.scrollTo(0, 0);
	}

	return (
		<div 
			className='RecipeItem'
			onClick={ handleClick }
		>
			<div className ='RecipeItem__img'>
				<img
					alt={ props.content.name}
					src={ props.content.img }
				/>
			</div>
			<div className='RecipeItem__description'>
				<div className='RecipeItem__name'>
					{ props.content.name }
				</div>
				<div className='RecipeItem__stats'>
					<FontAwesomeIcon icon={ faClock } />
					{ props.content.cookingTime } mins
				</div>
			</div>
		</div>
	);
}

RecipeItem.propTypes = {
	content: PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		cookingTime: PropTypes.number.isRequired,
	})
}

export default RecipeItem;