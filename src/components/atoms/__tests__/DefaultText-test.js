/**
 * @format
 */

import 'react-native';
import React from 'react';
import render from 'react-test-renderer';
import DefaultText from '_atoms/DefaultText';

// Testing to see whether DefaultText component renders as it should be
test('DefaultText component snapshot', () => {
  const defaultTextSnap = render.create(<DefaultText />).toJSON();
  expect(defaultTextSnap).toMatchSnapshot();
});

// import {render} from '@testing-library/react-native';

// test('DefaultText component snapshot', () => {
//   const defaultTextSnap = render(<DefaultText />).toJSON();
//   expect(defaultTextSnap).toMatchSnapshot();
// });

// UPDATE SnapShot ==> npm test -- -u
