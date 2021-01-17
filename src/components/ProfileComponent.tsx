import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import AuthenticationComponent from '../app-modules/authentication/authentication.component';
import ProfileScreen from '../screens/ProfileScreen';
import {AuthService} from '../services/auth.service';

const ProfileComponent = () => {
  /**
   * Services
   */
  const authService: AuthService = new AuthService();

  /**
   * On Start
   */
  useFocusEffect(() => {
    isUserAuthenticated();
  });

  /**
   * Check if user data is in the App
   */
  const isUserAuthenticated = () => {
    const user = authService.getUserData();
    return user != null;
  };

  /**
   * Show the profile screen
   */
  const showProfile = () => {
    return <ProfileScreen />;
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
