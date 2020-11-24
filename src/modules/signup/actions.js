import {SignUpActionTypes} from './types';

export const registerUser = (email, password) => {
  return {
    type: SignUpActionTypes.USER_REGISTRATION,
    payload: {
      email,
      password,
    },
  };
};

export const showLoader = show => {
  return {
    type: SignUpActionTypes.SHOW_LOADER,
    payload: {
      loading: show,
    },
  };
};
