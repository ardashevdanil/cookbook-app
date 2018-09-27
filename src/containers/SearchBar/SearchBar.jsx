import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchItems from '../../actions/searchItems';
import { selectCategory } from '../../actions/selectCategory';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }


  onBlur() {
    this.setState({ value: '' });
  }

  handleChange(e) {
    const { timer, value } = { ...this.state };
    const { dispatch, history, location } = { ...this.props };

    clearInterval(timer);

    this.setState({
      timer: setTimeout(() => {
        dispatch(searchItems(value));
      }, 100),
      value: e.target.value,
    });

    if (location.pathname !== '/cookbook-app/search') {
      dispatch(selectCategory('search'));
      history.push('/cookbook-app/search');
    }
  }

  render() {
    const { value } = { ...this.state };

    return (
      <div className="SearchBar">
        <input
          className="SearchBar__input"
          onBlur={this.onBlur}
          onChange={this.handleChange}
          type="text"
          value={value}
        />
        <div className="SearchBar__placeholder">
          <FontAwesomeIcon icon={faSearch} />
          {' '}
          FIND A RECIPE
        </div>
      </div>
    );
  }
}

export default connect()(SearchBar);

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
