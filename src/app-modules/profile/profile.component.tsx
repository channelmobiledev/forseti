import React, {useEffect, useState} from 'react';
import AuthenticationComponent from '../../app-modules/authentication/authentication.component';
import UserModel from '../../models/UserModel';
import ProfileScreen from './profile.screen';
import {AuthService} from '../../services/auth.service';

const ProfileComponent = () => {
  /**
   * State hooks
   */
  const [userData, setUserData] = useState<UserModel>();

  // On Component Start
  useEffect(() => {
    console.log('DEBUG running hello! :D');
    getUserData();
  }, []);

  /**
   * Services
   */
  const authService: AuthService = new AuthService();

  /**
   * Get User data
   */
  const getUserData = async () => {
    const user = await authService.getUserData();
    setUserData(user);
  };

  /**
   * Check if user data is in the App
   */
  const isUserAuthenticated = () => {
    return userData != null;
  };

  /**
   * Show the profile screen
   */
  const showProfile = () => {
    return <ProfileScreen userData={userData} />;
  };

  /**
   * Show the authentication screen
   */
  const showAuthentication = () => {
    return <AuthenticationComponent authService={authService} />;
  };

  /**
   * Render
   */
  return <>{isUserAuthenticated() ? showProfile() : showAuthentication()}</>;
};

export default ProfileComponent;
