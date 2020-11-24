import wretch from 'wretch';

import { USER_REGISTER_ENDPOINT } from '../config';

interface IValidateEmailParams {
  email: string;
  password: string;
}

export class SignUpApi {
  public static registerUser(subscribeNewsletterParams) {
    return wretch()
      .url(USER_REGISTER_ENDPOINT)
      .post(subscribeNewsletterParams)
      .res();
  }
}
