import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '_scenes/home';

test('should add item', () => {
  const {debug, getByTestId, getByText} = render(<Home />);
  // debug();
  const button = getByTestId('add-btn');
  const input = getByTestId('adder-input');
  // add item
  fireEvent.changeText(input, 'item');
  fireEvent.press(button);
  const item = getByText('item');
  expect(item).toBeDefined();
});

test('should delete item', () => {
  const {getByTestId, getByText, getAllByTestId, queryByText} = render(
    <Home />,
  );
  const button = getByTestId('add-btn');
  const input = getByTestId('adder-input');
  // add item
  fireEvent.changeText(input, 'item');
  fireEvent.press(button);
  const item = getByText('item');
  expect(item).toBeDefined();

  const deleteButtons = getAllByTestId('cell-delete');
  fireEvent.press(deleteButtons[0]);
  expect(queryByText('item')).toBeNull(); // queryByText return null when it can not find the component
});

test('should remain item', () => {
  const {getByTestId, getByText, getAllByTestId, queryByText} = render(
    <Home />,
  );
  const button = getByTestId('add-btn');
  const input = getByTestId('adder-input');
  // add item
  fireEvent.changeText(input, 'item');
  fireEvent.press(button);
  const item = getByText('item');
  expect(item).toBeDefined();
  // add item 2
  fireEvent.changeText(input, 'item2');
  fireEvent.press(button);
  const item2 = getByText('item2');
  expect(item2).toBeDefined();

  const deleteButtons = getAllByTestId('cell-delete');
  fireEvent.press(deleteButtons[0]);
  expect(queryByText('item')).toBeNull(); // queryByText return null when it can not find the component

  const list = getByTestId('list');
  expect(list).toContainElement(item2);
});
