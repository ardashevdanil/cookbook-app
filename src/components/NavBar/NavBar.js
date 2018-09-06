// import { connect } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './NavBar.css';

// import fetchItemsIfNeeded from '../../actions/fetchItemsIfNeeded';
// import { selectCategory } from '../../actions/selectCategory';

const links = [
  { name: 'home', path: '/', tag: 'home' },
  { name: 'recipes', path: '/recipes', tag: 'recipes' },
  { name: 'photo galleries', path: '/photo_galleries', tag: 'photo_galleries' },
  { name: 'videos', path: '/videos', tag: 'videos' },
  { name: 'all categories', path: '/all_categories', tag: 'all_categories' },
]

function NavBar(props) {
  
  /*
  let onClick = (tag) => {
    props.dispatch( fetchItemsIfNeeded(tag) );
    props.dispatch( selectCategory(tag) );
  }
  */

  const linkComponents = links.map( (link, index) => {
    return (
      <Link 
        to={ link.path }
        key={ index }
        className='NavBar__link'
        // onClick={ () => onClick(link.tag) }
      >
        { link.name.toUpperCase() }
      </Link>
    );
  });

	return(
		<div className='NavBar'>
			{ linkComponents }
		</div>
	);
}

// export default connect()(NavBar);
export default NavBar;