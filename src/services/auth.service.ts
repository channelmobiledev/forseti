import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_ADDRESS} from '../constants/CONFIG';
import UserModel from '../models/UserModel';

export class AuthService {
  /**
   * Storage keys
   */
  private KEY_USER = '@user_data';

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
      .then((userData: UserModel) => {
        // TODO take care of the error message

        console.log('DEBUG login with success! ' + JSON.stringify(userData));

        this.setUserData(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * Save user data into the app storage
   */
  setUserData = async (user: UserModel) => {
    try {
      console.log('DEBUG Login successfully done!');
      await AsyncStorage.setItem(this.KEY_USER, JSON.stringify(user));
    } catch (error) {
      console.log('DEBUG Error while saving user data: ' + error);
    }
  };

  /**
   * Get the user data from the app storage
   */
  getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem(this.KEY_USER);
      if (user) {
        return JSON.parse(user);
      } else {
        console.log('DEBUG could not retrive user');
      }
    } catch (error) {
      console.log('DEBUG Error while saving user data: ' + error);
    }
  };
}
