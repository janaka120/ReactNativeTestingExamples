/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SubmitButton from '_molecules/SubmitButton';

// Testing component interaction
test('should SubmitButton component press functionality works', () => {
  const onPressMock = jest.fn();

  const {getByText} = render(
    <SubmitButton title={'Login'} onPress={onPressMock} disabled={false} />,
  );
  fireEvent.press(getByText('Login'));
  expect(onPressMock).toHaveBeenCalled();
});

test('should SubmitButton component disabled functionality woks', () => {
  const onPressMock = jest.fn();

  const {getByText} = render(
    <SubmitButton title={'Login'} onPress={onPressMock} disabled={true} />,
  );

  expect(getByText('Login')).toBeDisabled();
});

test('should SubmitButton component disabled color GREEN_BDB', () => {
  const onPressMock = jest.fn();

  const {getByText} = render(
    <SubmitButton title={'Login'} onPress={onPressMock} disabled={true} />,
  );

  expect(getByText('Login')).toHaveStyle({color: 'white'});
});
