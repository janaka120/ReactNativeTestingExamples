import {ToastStyles} from 'react-native-toaster';
import {ToasterActionTypes} from './types';

const TOASTER_DURATION = 3000;

export const showErrorMessage = message => {
  return {
    type: ToasterActionTypes.ADD_TOAST,
    payload: {
      text: message,
      duration: TOASTER_DURATION,
      styles: {
        container: {...ToastStyles.error.container, backgroundColor: 'red'},
        text: {
          ...ToastStyles.text,
          fontSize: 13,
          lineHeight: 16,
          color: '#fff',
        },
      },
    },
  };
};

export const showSuccessMessage = message => {
  return {
    type: ToasterActionTypes.ADD_TOAST,
    payload: {
      text: message,
      duration: TOASTER_DURATION,
      styles: {
        container: {
          ...ToastStyles.error.container,
          backgroundColor: 'green',
        },
        text: {
          ...ToastStyles.text,
          fontSize: 13,
          lineHeight: 16,
          color: '#fff',
        },
      },
    },
  };
};
