import PropTypes from 'prop-types';
import React from 'react';
import './ItemsList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class ItemsList extends React.Component {
  componentDidUpdate(prevProps) {
    const { location, onUpdate } = { ...this.props };

    // FIX: I think there's a better way to handle location changes
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        onUpdate('recipes');
      } else {
        onUpdate(location.pathname.slice(1));
      }
    }
  }

  render() {
    const { items, isFetching, history } = { ...this.props };
    const itemsComponents = items.map(item => (
      <this.props.item
        content={item}
        history={history}
        key={item.id}
      />
    ));

    if (isFetching) {
      return (
        <div className="ItemsList__empty-list">
          <FontAwesomeIcon
            icon={faCog}
            spin
            size="2x"
          />
        </div>
      );
    }

    if (!items.length) {
      return (
        <div className="ItemsList__empty-list">
          <div>No Matches</div>
        </div>
      );
    }

    return (
      <div className="ItemsList">
        { itemsComponents }
      </div>
    );
  }
}

export default ItemsList;

ItemsList.defaultProps = {
  isFetching: true,
  location: {},
};

ItemsList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  location: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
};
