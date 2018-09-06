import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Recipe from './Recipe';

Enzyme.configure({ adapter: new Adapter() });

describe('test Recipe component', () => {
  const component = Enzyme.shallow(
    <Recipe />
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
})