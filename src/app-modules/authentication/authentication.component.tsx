import React, {useState} from 'react';
import {Alert} from 'react-native';
import {AuthStep} from '../../models/AuthStepModel';
import {UserRegisterFormModel} from '../../models/UserRegisterForm';
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
   * Show register component
   */
  const showRegister = () => {
    setStep(AuthStep.register);
  };

  /**
   * Show forgot password component
   */
  const showForgotPassword = () => {
    setStep(AuthStep.forgotPassword);
  };

  /**
   * Handle register click
   */
  const performUserRegister = (userRegisterForm: UserRegisterFormModel) => {
    props.authService
      .register(userRegisterForm)
      .then(() => {
        onRegisterSuccess();
      })
      .catch((error) => {
        onRegisterError(error);
      });
  };

  /**
   * Handles authentication after a user is successfully register
   */
  const onRegisterSuccess = () => {
    Alert.alert('', 'User created successfully');
    setStep(AuthStep.login);
  };

  /**
   * Handles authentication after a user is successfully register
   */
  const onRegisterError = (error: any) => {
    Alert.alert('Error registering new user', error);
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
      onRegisterSubmit={(userRegisterForm: UserRegisterFormModel) =>
        performUserRegister(userRegisterForm)
      }
      onRegisterButtonPress={() => showRegister()}
      onForgotPasswordButtonPress={() => showForgotPassword()}
      onGoBack={() => performGoBack()}
    />
  );
};

export default AuthenticationComponent;
