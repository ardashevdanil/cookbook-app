import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Comment from './Comment';

Enzyme.configure({ adapter: new Adapter() });

describe('test Comment component', () => {
  const component = Enzyme.shallow(
    <Comment
      avatar="test"
      date="test"
      likes={42}
      userName="test"
      text="test"
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
