import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.changeBanner = this.changeBanner.bind(this);
    this.state = {
      selectedBanner: 0,
    };
    this.handleChangeBanner = this.handleChangeBanner.bind(this);
    this.timer = setInterval(this.changeBanner, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  changeBanner() {
    this.setState((prevState) => {
      let nextBanner;

      if (prevState.selectedBanner === 4) {
        nextBanner = 0;
      } else {
        nextBanner = { ...prevState }.selectedBanner + 1;
      }

      return { selectedBanner: nextBanner };
    });
  }

  handleChangeBanner(id) {
    clearInterval(this.timer);
    this.setState({ selectedBanner: id });
  }

  render() {
    const { selectedBanner } = this.state;
    const { items } = this.props;

    if (!items.length) return null;

    const navButtons = [0, 1, 2, 3, 4].map((item) => {
      let className;

      if (selectedBanner === item) {
        className = 'Banner__nav-button_active Banner__nav-button';
      } else {
        className = 'Banner__nav-button';
      }

      return (
        <div
          className={className}
          key={item}
          onClick={() => this.handleChangeBanner(item)}
        />
      );
    });


    return (
      <div
        className="Banner"
        style={{
          backgroundImage: `url('${items[+selectedBanner].img}')`,
        }}
      >
        <div className="Banner__content">
          <div className="Banner__logo" />
          <div className="Banner__name">
            { items[+selectedBanner].name }
          </div>
          <div className="Banner__description">
            { items[+selectedBanner].description }
          </div>
          <Link
            className="Banner__button"
            to={`/cookbook-app/recipe/${items[+selectedBanner].id}`}
          >
            GET IT RECIPE
          </Link>
        </div>
        <div className="Banner__change-menu">
          { navButtons }
        </div>
      </div>
    );
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
    }).isRequired,
  ).isRequired,
};
