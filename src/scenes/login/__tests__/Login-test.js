import React from 'react';
import Login from '_scenes/login';
import {renderScreen} from '../../../utils/TestHelper';
import {act} from 'react-test-renderer';
import {fireEvent} from '@testing-library/react-native';

jest.runAllTimers();
// testing Async task
test('should login to system', () => {
  const loginScreen = renderScreen(<Login />);
  act(() => jest.runAllTimers());
  const loaderCom = loginScreen.getByTestId('full-screen-loader');
  expect(loaderCom.props.visible).toEqual(false);
  fireEvent.press(loginScreen.getByText('Login'));
  expect(loaderCom.props.visible).toEqual(true);
});

const navigation = {
  navigate: jest.fn(),
};

// test react navigation
test('should navigate to Home screen', async () => {
  const loginScreen = renderScreen(<Login navigation={navigation} />);
  const loginBtn = loginScreen.getByText('Login');
  fireEvent.press(loginBtn);
  act(() => jest.runAllTimers()); // use to run all the time-out functions
  expect(navigation.navigate).toHaveBeenCalledWith('App');
});
