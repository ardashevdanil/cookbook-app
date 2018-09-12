import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Banner.css';

import exampleImg from './exampleImg.png';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.changeBanner = this.changeBanner.bind(this);
    this.handleChangeBanner = this.handleChangeBanner.bind(this);
    this.state = {
      selectedBanner: 0,
    };
    this.timer = setInterval(this.changeBanner, 5000);
  }

  changeBanner() {
    this.setState( (prevState) => {
      let nextBanner;

      if (prevState.selectedBanner === 4) {
        nextBanner = 0;
      } else {
        nextBanner = ++prevState.selectedBanner;
      }

      return { selectedBanner: nextBanner }
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleChangeBanner(id) {
    clearInterval(this.timer);
    this.setState({ selectedBanner: id })
  }

  render() {
    if ( !this.props.items.length ) return null

    let selectedBanner = this.props.items[ this.state.selectedBanner ];
    let navButtons = [0, 1, 2, 3, 4].map( (item) => {
      let className;

      if (this.state.selectedBanner === item) {
        className = 'Banner__nav-button_active Banner__nav-button';
      } else {
        className = 'Banner__nav-button';
      }

      return (
        <div
          className={ className }
          key={ item }
          onClick={ () => this.handleChangeBanner(item) }
        />
      )
    })


    return (
      <div
        className='Banner'
        style={{
          backgroundImage: `url('${selectedBanner.img}')`,
        }}
      >
        <div className='Banner__content'>
          <div className='Banner__logo'></div>
          <div className='Banner__name'>
            { selectedBanner.name }
          </div>
          <div className='Banner__description'>
            { selectedBanner.description }
          </div>
          <Link
            className='Banner__button'
            to={`/cookbook-app/recipe/${selectedBanner.id}`}
          >
            GET IT RECIPE
          </Link>
        </div>
        <div className='Banner__change-menu'>
          { navButtons }
        </div>
      </div>
    )
  }
}

export default Banner;

Banner.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cookingTime: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}