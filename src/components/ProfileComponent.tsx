import React from 'react';
import AuthenticationComponent from '../app-modules/authentication/authentication.component';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileComponent = () => {
  /**
   * Check if user data is in the App
   */
  const isUserAuthenticated = () => {
    // TODO Implement check
    return false;
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
    return <AuthenticationComponent />;
  };

  /**
   * Render
   */
  return <>{isUserAuthenticated() ? showProfile() : showAuthentication()}</>;
};

export default ProfileComponent;
