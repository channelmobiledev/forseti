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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authService: AuthService = new AuthService();

  /**
   * Handle login click
   */
  const onLoginClick = () => {
    // TODO Check if login is valid
    if (true) {
      userLogin();
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

  const userLogin = () => {
    authService.login(username, password);
  };

  /**
   * Render
   */
  return (
    <AuthenticationScreen
      authStep={authStep}
      username={username}
      password={password}
      setUsername={(username: string) => setUsername(username)}
      setPassword={(password: string) => setPassword(password)}
      onLoginClick={() => onLoginClick()}
      onRegisterClick={() => onRegisterClick()}
      onForgotPasswordClick={() => onForgotPasswordClick()}
    />
  );
};

export default AuthenticationComponent;
