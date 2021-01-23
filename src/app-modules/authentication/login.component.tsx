import React from 'react';
import LoginScreen from './login.screen';

/**
 * Props
 */
interface Props {
  onLogin: (username: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

/**
 * Login Component
 */
const LoginComponent = (props: Props) => {
  /**
   * Render
   */
  return (
    <LoginScreen
      onLoginClick={(username: string, password: string) =>
        props.onLogin(username, password)
      }
      onRegisterClick={() => props.onRegister()}
      onForgotPasswordClick={() => props.onForgotPassword()}
    />
  );
};

export default LoginComponent;
