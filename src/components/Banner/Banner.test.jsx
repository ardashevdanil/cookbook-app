import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Banner from './Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('test Banner component', () => {
  const component = Enzyme.shallow(
    <Banner
      items={[
        {
          comments: 0,
          cookingTime: 0,
          description: '',
          difficult: '',
          id: 0,
          img: '/test',
          ingridients: ['', ''],
          name: 'test1',
          videoId: '',
          watched: 0,
        }, {
          comments: 0,
          cookingTime: 0,
          description: '',
          difficult: '',
          id: 0,
          img: '/test',
          ingridients: ['', ''],
          name: 'test1',
          videoId: '',
          watched: 0,
        },
      ]}
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  test('changes state.activeBanner after click on nav button', () => {
    const states = [];

    states.push(component.state().selectedBanner);
    component.find('.Banner__nav-button').at(1).simulate('click');
    states.push(component.state().selectedBanner);

    expect(states).toEqual([0, 1]);
  });
});
