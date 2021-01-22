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
  validateUsername = (username: string) => {
    // TODO
  };

  /**
   * Validates password
   */
  validatePassword = (password: string) => {
    // TODO
  };

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
      await AsyncStorage.setItem(this.KEY_USER, JSON.stringify(user));
      console.log('DEBUG Login successfully done!');
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

  /**
   * Perform the logout on storage
   */
  logout = async () => {
    try {
      await AsyncStorage.removeItem(this.KEY_USER);
      console.log('DEBUG Logout successfully done!');
    } catch (error) {
      console.log('DEBUG Error while saving user data: ' + error);
    }
  };
}
