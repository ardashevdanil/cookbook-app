import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import NavBar from './NavBar';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  selectedCategory: 'home'
}

const store = configureStore()(initialState);

describe('test NavBar component', () => {
	const component = Enzyme.mount(
    <MemoryRouter>
  		<Provider store={store}>
        <NavBar
          dispatch={ () => null }
          onLinkClick={ () => null }
        />
      </Provider>
    </MemoryRouter>
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
})