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
    }
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleNavBarClick = this.handleNavBarClick.bind(this);
  }

  handleDropdownClick() {
    this.setState( (prevState) => {
      return {
        isDropdownShown: !prevState.isDropdownShown,
      }
    });
  }

  handleNavBarClick() {
    this.setState({
      isDropdownShown: false,
    })
  }

  render() {
    return(
      <div className='NavMenu'>
        <div className='NavMenu__logo'></div>
        <div className='NavMenu__desktop-navbar'>
         <NavBar />
        </div>
        <SearchBar
          history={this.props.history}
          location={this.props.location}
        />
        <div className='NavMenu__mobile-navbar'>
          <div
            className='NavMenu__dropdown'
            style={{
              display: this.state.isDropdownShown ? 'block' : 'none',
            }}
          >
            <NavBar 
              onLinkClick={ this.handleNavBarClick }
            />
          </div>
          <FontAwesomeIcon 
            icon={ faBars }
            onClick={ this.handleDropdownClick }
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