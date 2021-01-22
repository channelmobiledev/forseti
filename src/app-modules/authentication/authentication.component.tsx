import React, {useState} from 'react';
import {AuthStep} from '../../models/AuthStepModel';
import {AuthService} from '../../services/auth.service';
import AuthenticationScreen from './authentication.screen';

interface Props {
  authService: AuthService;
  onLoginSuccess: () => void;
}

/**
 * Handles Authentication Logic
 */
const AuthenticationComponent = (props: Props) => {
  /**
   * React hooks state
   */
  const [authStep, setStep] = useState<AuthStep>(AuthStep.login);

  /**
   * Handle login click
   */
  const onLoginClick = (username: string, password: string) => {
    // TODO validate login fields
    if (true) {
      userLogin(username, password);
    } else {
    }
  };

  /**
   * Handle register click
   */
  const onRegisterClick = () => {
    setStep(AuthStep.register);
  };

  /**
   * Handle forgot password click
   */
  const onForgotPasswordClick = () => {
    setStep(AuthStep.forgotPassword);
  };

  const userLogin = (username: string, password: string) => {
    props.authService.login(username, password).then(() => {
      console.log('DEBUG Hello :D 1');
      props.onLoginSuccess();
    });

    //props.authService.login(username, password);
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
