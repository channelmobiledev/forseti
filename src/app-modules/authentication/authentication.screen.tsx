import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthStep} from '../../models/AuthStepModel';
import ForgotPasswordComponent from './forgotpassword.component';
import LoginComponent from './login.component';
import RegisterComponent from './register.component';

/**
 * Props
 */
interface Props {
  authStep: AuthStep;
  onLogin: (username: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

/**
 * Authentication Screen
 */
const AuthenticationScreen = (props: Props) => {
  /**
   * Show the login component
   */
  const showLoginView = () => {
    return (
      <LoginComponent
        onLogin={(username: string, password: string) =>
          props.onLogin(username, password)
        }
        onRegister={() => props.onRegister()}
        onForgotPassword={() => props.onForgotPassword()}
      />
    );
  };

  /**
   * Show the register component
   */
  const showRegisterView = () => {
    return <RegisterComponent />;
  };

  /**
   * Show the forgot password component
   */
  const showForgotPasswordView = () => {
    return <ForgotPasswordComponent />;
  };

  /**
   * Renders the correct step of the Auth
   */
  const renderSelectedStepView = () => {
    switch (props.authStep) {
      case AuthStep.login:
        return showLoginView();
      case AuthStep.register:
        return showRegisterView();
      case AuthStep.forgotPassword:
        return showForgotPasswordView();
    }
  };

  /**
   * Render
   */
  return <View style={styles.container}>{renderSelectedStepView()}</View>;
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AuthenticationScreen;
