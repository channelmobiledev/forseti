import React, {useState} from 'react';
import {AuthStep} from '../../models/AuthStepModel';
import {AuthService} from '../../services/auth.service';
import AuthenticationScreen from './authentication.screen';

/**
 * Props
 */
interface Props {
  authService: AuthService;
  onLoginSuccess: () => void;
}

/**
 * Handles Authentication Logic
 */
const AuthenticationComponent = (props: Props) => {
  /**
   * States
   */
  const [authStep, setStep] = useState<AuthStep>(AuthStep.login);

  /**
   * Handle login click
   */
  const performLogin = (username: string, password: string) => {
    // TODO validate login fields
    if (true) {
      props.authService.login(username, password).then(() => {
        props.onLoginSuccess();
      });
    } else {
    }
  };

  /**
   * Handle register click
   */
  const performRegister = () => {
    setStep(AuthStep.register);
  };

  /**
   * Handle forgot password click
   */
  const performForgotPassword = () => {
    setStep(AuthStep.forgotPassword);
  };

  /**
   * Handle going back
   */
  const performGoBack = () => {
    setStep(AuthStep.login);
  };

  /**
   * Render
   */
  return (
    <AuthenticationScreen
      authStep={authStep}
      onLogin={(username: string, password: string) =>
        performLogin(username, password)
      }
      onRegister={() => performRegister()}
      onForgotPassword={() => performForgotPassword()}
      onGoBack={() => performGoBack()}
    />
  );
};

export default AuthenticationComponent;
