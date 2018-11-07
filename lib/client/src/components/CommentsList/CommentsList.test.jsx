import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import CommentsList from './CommentsList';

Enzyme.configure({ adapter: new Adapter() });

describe('test CommentsList component', () => {
  const component = Enzyme.shallow(
    <CommentsList
      comments={[{}]}
      fetchComments={() => null}
      recipe={1}
      user="test"
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
