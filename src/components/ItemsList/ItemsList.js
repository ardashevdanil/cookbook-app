import PropTypes from 'prop-types';
import React from 'react';
import './ItemsList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class ItemsList extends React.Component {
	
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) { // Один
																																				//
			if (this.props.location.pathname === '/cookbook-app') {           // Большой
				this.props.onUpdate('recipes');																	//
			} else {																													//
				this.props.onUpdate(this.props.location.pathname.slice(14));    // Костыль
			}
		}
	}
	
	render() {
		const items = this.props.items.map( (item, index) => {
			return (
				<this.props.item
					content={ item }
					history={ this.props.history }
					key={ index }
				/>
			)
		})
		
		if (this.props.isFetching) {
			return (
				<div 
					className='ItemsList__empty-list'
				>
					<FontAwesomeIcon icon={ faCog } spin size='2x'/>
				</div>
			)
		} else if (!items.length) {
			return (
				<div 
					className='ItemsList__empty-list'
				>
					<div>No Matches</div>
				</div>
			)
		}
		
	
		return (
			<div 
				className='ItemsList'
			>
				{ items }
			</div>
		);
	}
}

export default ItemsList;

ItemsList.propTypes = {
	isFetching: PropTypes.bool,
	items: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
	location: PropTypes.object,
	onUpdate: PropTypes.func.isRequired,
	selectedCategory: PropTypes.string.isRequired,
}
