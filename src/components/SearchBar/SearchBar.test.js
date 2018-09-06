import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  searchValue: '',
}
const store = configureStore()(initialState);

describe('test SearchBar component', () => {
	const component = Enzyme.mount(
		<Provider store={store}>
      <SearchBar />
    </Provider>
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
})