import PropTypes from 'prop-types';
import React from 'react';
import './ItemsList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Item from '../Item/Item';
import exampleImg from './exampleImg.png';

class ItemsList extends React.Component {

	/*
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			
			if (this.props.location.pathname === '/') {
				this.props.onUpdate('home');
			} else {
				this.props.onUpdate(this.props.location.pathname.slice(1));
			}
		}
	}
	*/

	render() {
		const items = fakeData.map( (item, index) => {
			return (
				<Item
					content={ item }
					key={ index }
				/>
			)
		})
		/*
		if (this.props.isFetching) {
			return (
				<div 
					className={ styles.emptyList }
					style={{
						minHeight: document.documentElement.clientHeight - 312
					}}
				>
					<FontAwesomeIcon icon={ faCog } spin size='2x'/>
				</div>
			)
		} else if (!items.length) {
			return (
				<div 
					className={ styles.emptyList }
					style={{
						minHeight: document.documentElement.clientHeight - 312
					}}
				>
					<div>No Matches</div>
				</div>
			)
		}
		*/
	
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

const fakeData = [
	{
		name: 'Raspberry & Cream Frozen Yogurt Pie',
		cookingTime: 35,
		comments: 7,
		watched: 14,
		img: exampleImg,
	},
	{
		name: 'Raspberry & Cream Frozen Yogurt Pie',
		cookingTime: 35,
		comments: 7,
		watched: 14,
		img: exampleImg,
	},
	{
		name: 'Raspberry & Cream Frozen Yogurt Pie',
		cookingTime: 35,
		comments: 7,
		watched: 14,
		img: exampleImg,
	},
	{
		name: 'Raspberry & Cream Frozen Yogurt Pie',
		cookingTime: 35,
		comments: 7,
		watched: 14,
		img: exampleImg,
	},
	{
		name: 'Raspberry & Cream Frozen Yogurt Pie',
		cookingTime: 35,
		comments: 7,
		watched: 14,
		img: exampleImg,
	},
]

/*
ItemsList.propTypes = {
	currency: PropTypes.string.isRequired,
	isFetching: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			name: PropTypes.shape({
				eng: PropTypes.string,
				rus: PropTypes.string,
			}),
			price: PropTypes.shape({
				usd: PropTypes.number,
				rub: PropTypes.number,
			}),
			tags: PropTypes.arrayOf(PropTypes.string)
		})
	).isRequired,
	location: PropTypes.object,
	onUpdate: PropTypes.func.isRequired,
	pushCart: PropTypes.func.isRequired,
	selectedCategory: PropTypes.string.isRequired,
}
*/