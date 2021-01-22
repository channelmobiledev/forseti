import React, {useEffect, useState} from 'react';
import AuthenticationComponent from '../../app-modules/authentication/authentication.component';
import UserModel from '../../models/UserModel';
import ProfileScreen from './profile.screen';
import {AuthService} from '../../services/auth.service';
import {ProfileCheckModel} from '../../models/ProfileCheckModel';
import GradientView from '../utilityViews/gradient.screen';
import Loading from '../utilityViews/loading.screen';

const ProfileComponent = () => {
  /**
   * State hooks
   */
  const [userData, setUserData] = useState<UserModel>();
  const [profileState, setProfileState] = useState<ProfileCheckModel>(
    ProfileCheckModel.checkProfile,
  );

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

    if (user) {
      setProfileState(ProfileCheckModel.showProfile);
    } else {
      setProfileState(ProfileCheckModel.showAuth);
    }
  };

  /**
   * Show loading activity indicator
   */
  const showLoading = () => {
    return (
      <GradientView>
        <Loading />
      </GradientView>
    );
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
    return (
      <AuthenticationComponent
        authService={authService}
        onLoginSuccess={() => {
          getUserData();
          //setProfileState(ProfileCheckModel.showProfile);
        }}
      />
    );
  };

  /**
   * Renders the correct step of the Profile
   */
  const renderSelectedStepView = () => {
    switch (profileState) {
      case ProfileCheckModel.checkProfile:
        return showLoading();
      case ProfileCheckModel.showAuth:
        return showAuthentication();
      case ProfileCheckModel.showProfile:
        return showProfile();
    }
  };

  /**
   * Render
   */
  return <>{renderSelectedStepView()}</>;
};

export default ProfileComponent;
