import PropTypes from 'prop-types';
import React from 'react';
import './NavMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import NavBar from '../../containers/NavBar/NavBar';
import SearchBar from '../../containers/SearchBar/SearchBar';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownShown: false,
    };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  handleDropdownClick() {
    this.setState(prevState => (
      { isDropdownShown: !prevState.isDropdownShown }
    ));
  }

  render() {
    const { history, location } = { ...this.props };
    const { isDropdownShown } = { ...this.state };

    return (
      <div className="NavMenu">
        <div className="NavMenu__logo" />
        <div className="NavMenu__desktop-navbar">
          <NavBar />
        </div>
        <SearchBar
          history={history}
          location={location}
        />
        <div className="NavMenu__mobile-navbar">
          <div
            className="NavMenu__dropdown"
            onClick={this.handleDropdownClick}
            role="navigation"
            style={{
              display: isDropdownShown ? 'block' : 'none',
            }}
          >
            <NavBar />
          </div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={this.handleDropdownClick}
          />
        </div>
      </div>
    );
  }
}

export default NavMenu;

NavMenu.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
