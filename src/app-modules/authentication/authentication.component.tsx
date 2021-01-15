import React, {useEffect, useState} from 'react';
import {AuthStep} from '../../models/AuthStepModel';
import {AuthService} from '../../services/auth.service';
import AuthenticationScreen from './authentication.screen';

/**
 * Handles Authentication Logic
 */
const AuthenticationComponent = () => {
  /**
   * React hooks state
   */
  const [authStep, setStep] = useState<AuthStep>(AuthStep.login);

  /**
   * Services
   */
  const authService: AuthService = new AuthService();

  /**
   * Handle login click
   */
  const onLoginClick = (username: string, password: string) => {
    // TODO Check if login is valid
    if (true) {
      userLogin(username, password);
    } else {
    }
  };

  /**
   * Handle register click
   */
  const onRegisterClick = () => {
    console.log('DEBUG onRegisterClick');
  };

  /**
   * Handle forgot password click
   */
  const onForgotPasswordClick = () => {
    console.log('DEBUG onForgotPasswordClick');
  };

  const userLogin = (username: string, password: string) => {
    authService.login(username, password);
  };

  /**
   * Render
   */
  return (
    <AuthenticationScreen
      authStep={authStep}
      onLoginClick={(username: string, password: string) =>
        onLoginClick(username, password)
      }
      onRegisterClick={() => onRegisterClick()}
      onForgotPasswordClick={() => onForgotPasswordClick()}
    />
  );
};

export default AuthenticationComponent;
