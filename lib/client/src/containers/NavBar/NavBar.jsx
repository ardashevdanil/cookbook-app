import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import fetchItemsIfNeeded from '../../actions/fetchItemsIfNeeded';
import links from '../../constants/links';
import { selectCategory } from '../../actions/selectCategory';

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
