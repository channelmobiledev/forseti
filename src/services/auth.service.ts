import {SERVER_ADDRESS} from '../constants/CONFIG';

export class AuthService {
  /**
   * Validates username
   */
  validateUsername = (username: string) => {};

  /**
   * Validates password
   */
  validatePassword = (password: string) => {};

  /**
   * Validates password
   */
  login = async (username: string, password: string) => {
    const formBody = [
      encodeURIComponent('username') + '=' + username,
      encodeURIComponent('password') + '=' + password,
    ];
    const address = SERVER_ADDRESS + 'users/signin';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody.join('&'),
    };

    await fetch(address, options)
      .then((response) => response.json())
      .then((data: any) => {
        console.log('DEBUG login with success! ' + JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
