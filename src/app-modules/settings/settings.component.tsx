import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import UserModel from '../../models/UserModel';
import {AuthService} from '../../services/auth.service';
import GradientView from '../utilityViews/gradient.screen';
import SettingsScreen from './settings.screen';

/**
 * Settings Component
 */
const SettingsComponent = () => {
  /**
   * States
   */
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserModel>();
  const navigation = useNavigation();

  /**
   * Services
   */
  const authService: AuthService = new AuthService();

  /**
   * Gets current user state
   */
  const checkUserAuthState = async () => {
    const userIsLoggedIn = await authService.isUserLoggedIn();

    if (userIsLoggedIn) {
      const userData: UserModel = await authService.getUserData();
      setUserData(userData);
    }

    setIsUserLoggedIn(userIsLoggedIn);
  };

  /**
   * Logout user
   */
  const profileLogout = () => {
    authService.logout();
    checkUserAuthState();
  };

  /**
   * On Component Start
   */
  useFocusEffect(
    React.useCallback(() => {
      checkUserAuthState();
      console.log('DEBUG On Settings Start');
    }, []),
  );

  /**
   * Render
   */
  return (
    <GradientView>
      <SettingsScreen
        isUserLoggedIn={isUserLoggedIn}
        userData={userData}
        onLogoutClick={() => profileLogout()}
        onSignInClick={() => navigation.navigate('Profile')}
      />
    </GradientView>
  );
};

export default SettingsComponent;
