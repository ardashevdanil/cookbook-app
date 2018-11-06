import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

import searchItems from '../../actions/searchItems';
import { selectCategory } from '../../actions/selectCategory';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur() {
    this.setState({ value: '' });
  }

  handleChange(e) {
    const { dispatch, history, location } = { ...this.props };

    this.setState({
      value: e.target.value,
    });
    if (e.target.value === '') return;
    dispatch(searchItems(e.target.value));
    dispatch(selectCategory('search'));

    if (location.pathname !== '/search') {
      history.push('/search');
    }
  }

  render() {
    const { value } = { ...this.state };

    return (
      <div className="SearchBar">
        <input
          className="SearchBar__input"
          onBlur={this.onBlur}
          onChange={_.throttle(this.handleChange, 100)}
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
