// This line mock hole FireBase.js file
jest.mock('../FireBase.js');

import {getNameCollection} from '../FireBase';

test('should return name collection data', () => {
  /* console.log(getNameCollection);
    will print these functions >>>>>>>>>>>
    { [Function: ** getNameCollection ** ]
        _isMockFunction: true,
        getMockImplementation: [Function],
        mock: [Getter/Setter],
        mockClear: [Function],
        mockReset: [Function],
        mockRestore: [Function],
        mockReturnValueOnce: [Function],
        mockResolvedValueOnce: [Function],
        mockRejectedValueOnce: [Function],
        mockReturnValue: [Function],
        mockResolvedValue: [Function],
        mockRejectedValue: [Function],
        mockImplementationOnce: [Function],
        mockImplementation: [Function],
        mockReturnThis: [Function],
        mockName: [Function],
        getMockName: [Function] }
        */

  getNameCollection.mockReturnValue(['name1', 'name2']);
  expect(getNameCollection()).toStrictEqual(['name1', 'name2']);
});

// mocking DB get user by ID fun
const DbGetUserById = jest.fn(() => {
  return {
    id: '001',
    firstName: 'abc',
    lastName: 'qwe',
    mail: 'abc@bnm.com',
    age: 25,
  };
});

test('should db return user successfully', () => {
  expect(DbGetUserById('001')).toStrictEqual({
    id: '001',
    firstName: 'abc',
    lastName: 'qwe',
    mail: 'abc@bnm.com',
    age: 25,
  });
});
