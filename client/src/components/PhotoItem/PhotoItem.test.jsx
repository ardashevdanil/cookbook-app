import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import PhotoItem from './PhotoItem';

Enzyme.configure({ adapter: new Adapter() });

describe('test PhotoItem component', () => {
  const component = Enzyme.shallow(
    <PhotoItem
      content={{
        img: '',
        name: 'test',
      }}
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
