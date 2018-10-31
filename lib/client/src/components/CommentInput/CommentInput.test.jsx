import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import CommentInput from './CommentInput';

Enzyme.configure({ adapter: new Adapter() });

describe('test CommentInput component', () => {
  const component = Enzyme.shallow(
    <CommentInput />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
