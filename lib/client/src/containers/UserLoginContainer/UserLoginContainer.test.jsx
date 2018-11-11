import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import UserLoginContainer from './UserLoginContainer';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  errors: {
    authorisationError: false,
    signInError: false,
  },
  activeUser: 'Guest',
};

const store = configureStore()(initialState);

describe('test UserLoginContainer component', () => {
  const component = Enzyme.mount(
    <MemoryRouter>
      <Provider store={store}>
        <UserLoginContainer />
      </Provider>
    </MemoryRouter>,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
