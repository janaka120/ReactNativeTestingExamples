import React from 'react';
import {addFun, squareFun} from '../CalculusFun';

test('should return 2 + 3 result', () => {
  expect(addFun(2, 3)).toBe(5);
});

test('should return 2 * 2 result', () => {
  expect(squareFun(2)).toBe(4);
});
