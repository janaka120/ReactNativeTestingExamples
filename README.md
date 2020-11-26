# ReactNativeTestingExamples

In this example application shows how to write unit testing and integration testing for React Native.

Application tested only on Android but should run on IOS platform also. Mainly cover testing for ReactNative UI, react navigation, mocking functionality(REST api), Snapshot testing, state - props change, Async task, Simple Redux store, React hooks. And also report generating for test coverage.


## Installation and usage

    $ npm install

    All jest tests:
    $ npm test

    Jest test single file:
    $ npm test <fileName-test.js>

## Modules used for testing:

- [jest](https://github.com/facebook/jest)
- [@testing-library/react-native](https://github.com/callstack/react-native-testing-library)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
- [fetch-mock](https://www.npmjs.com/package/fetch-mock)