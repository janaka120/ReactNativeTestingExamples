import React from 'react';
import fetchMock from 'fetch-mock';
import {waitFor, fireEvent} from '@testing-library/react-native';
import {USER_REGISTER_ENDPOINT} from '../../../api/config';
import About from '_scenes/about';
import {renderScreen, store} from '../../../utils/TestHelper';

test('should display successful message on successful subscribe', async () => {
  // Setup
  fetchMock.post(USER_REGISTER_ENDPOINT, 200);
  const page = renderScreen(<About />);
  // What the user sees
  const EmailInput = page.getByPlaceholderText('Email');
  const PasswordInput = page.getByPlaceholderText('Password');
  const RegisterButton = page.getByText('Register');
  // What the user does
  fireEvent.changeText(EmailInput, 'eve.holt@reqres.in');
  fireEvent.changeText(PasswordInput, '12345');
  fireEvent.press(RegisterButton);
  // What feedback the user should expect
  const SuccessMessage = waitFor(() => {
    page.queryByText('Register successful !');
  });
  expect(SuccessMessage).toBeTruthy();
});

beforeEach(() => {
  fetchMock.reset();
});

test('should display error message on failed subscribe', async () => {
  // Setup
  fetchMock.post(USER_REGISTER_ENDPOINT, 400);
  const page = renderScreen(<About />);
  // What the user sees
  const EmailInput = page.getByPlaceholderText('Email');
  const PasswordInput = page.getByPlaceholderText('Password');
  const RegisterButton = page.getByText('Register');
  // What the user does
  fireEvent.changeText(EmailInput, 'hello@');
  fireEvent.changeText(PasswordInput, '12345');
  fireEvent.press(RegisterButton);
  // What feedback the user should expect
  const ErrorMessage = waitFor(() =>
    page.queryByText('Oops something went wrong...'),
  );
  expect(ErrorMessage).toBeTruthy();
});

// state testing
test('should email enter works', () => {
  const aboutScreen = renderScreen(<About />);
  const emailInput = aboutScreen.getByPlaceholderText('Email');
  fireEvent.changeText(emailInput, 'abc@test.com');
  expect(emailInput.props.value).toEqual('abc@test.com');
});

test('should loader appear after press register btn', async () => {
  fetchMock.post(USER_REGISTER_ENDPOINT, 200);
  const aboutScreen = renderScreen(<About />);
  expect(aboutScreen.getByTestId('full-screen-loader').props.visible).toEqual(
    false,
  );
  fireEvent.changeText(
    aboutScreen.getByPlaceholderText('Email'),
    'eve.holt@reqres.in',
  );
  fireEvent.changeText(aboutScreen.getByPlaceholderText('Password'), '12345');
  fireEvent.press(aboutScreen.getByText('Register'));
  const loaderCom = aboutScreen.getByTestId('full-screen-loader');
  expect(loaderCom.props.visible).toEqual(true);
});

// testing reducer
test('should signup reducer update', async () => {
  fetchMock.post(USER_REGISTER_ENDPOINT, 200);
  const registerScreen = renderScreen(<About />);
  fireEvent.changeText(
    registerScreen.getByPlaceholderText('Email'),
    'eve.holt@reqres.in',
  );
  fireEvent.changeText(registerScreen.getByPlaceholderText('Password'), '1234');
  fireEvent.press(registerScreen.getByText('Register'));
  expect(store.getState().signup.loading).toEqual(true);
});
