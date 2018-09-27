import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './NavBar.css';

import fetchItemsIfNeeded from '../../actions/fetchItemsIfNeeded';
import { selectCategory } from '../../actions/selectCategory';

const links = [
  { name: 'home', path: '/cookbook-app', tag: 'recipes' },
  { name: 'recipes', path: '/cookbook-app/recipes', tag: 'recipes' },
  { name: 'photo galleries', path: '/cookbook-app/photos', tag: 'photos' },
  { name: 'videos', path: '/cookbook-app/videos', tag: 'videos' },
  { name: 'all categories', path: '/cookbook-app', tag: 'recipes' },
];

function NavBar(props) {
  const onClick = (tag) => {
    props.dispatch(fetchItemsIfNeeded(tag));
    props.dispatch(selectCategory(tag));
  };

  const linkComponents = links.map(link => (
    <Link
      to={link.path}
      key={link.name}
      className="NavBar__link"
      onClick={() => onClick(link.tag)}
    >
      {link.name.toUpperCase()}
    </Link>
  ));

  return (
    <div className="NavBar">
      { linkComponents }
    </div>
  );
}

export default connect()(NavBar);

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
