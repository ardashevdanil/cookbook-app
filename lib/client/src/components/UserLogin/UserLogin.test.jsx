import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import UserLogin from './UserLogin';

Enzyme.configure({ adapter: new Adapter() });

describe('test UserLogin component', () => {
  const onLogin = jest.fn();
  const onLogout = jest.fn();
  const onSignIn = jest.fn();
  const component = Enzyme.shallow(
    <UserLogin
      authorisationError={false}
      onLogin={onLogin}
      onLogout={onLogout}
      onSignIn={onSignIn}
      user={'Guest'}
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  test('doesn\'t call onLogin after click on login button with empty state', () => {
    component.find('.UserLogin__button').at(0).simulate('click');

    expect(onLogin.mock.calls.length).toBe(0);
  });

  test('calls onLogin after click on login button after inserting login and password in state', () => {
    component.setState({
      login: 'test',
      loginPassword: 'test',
    });
    component.find('.UserLogin__button').at(0).simulate('click');

    expect(onLogin.mock.calls[0][0]).toEqual({
      name: 'test',
      password: 'test',
    });
  });

  test('doesn\'t call onSignIn after click on signin button with empty state', () => {
    component.find('.UserLogin__button').at(1).simulate('click');

    expect(onSignIn.mock.calls.length).toBe(0);
  });

  test('calls onSignIn after click on signin button after inserting name and password in state', () => {
    component.setState({
      username: 'test',
      signInPassword: 'test',
    });
    component.find('.UserLogin__button').at(1).simulate('click');

    expect(onSignIn.mock.calls[0][0]).toEqual({
      name: 'test',
      password: 'test',
    });
  });

  test('should render logout window than user != Guest', () => {
    component.setProps({ user: 'Vasya' });

    expect(component.children.length).toBe(1);
  });
});
