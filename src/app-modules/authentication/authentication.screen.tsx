import {DefaultTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Button, TextInput} from 'react-native-paper';
import COLORS from '../../constants/COLORS';
import {AuthStep} from '../../models/AuthStepModel';
import ForgotPasswordComponent from './forgotpassword.component';
import RegisterComponent from './register.component';

// TODO Needs to move to a theme provider
/**
 * Theme settings
 */
const AppDefaultTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.transparent,
    primary: COLORS.secondaryColor,
    text: COLORS.white,
    placeholder: COLORS.secondaryColor,
    underlineColor: COLORS.secondaryColor,
  },
};

/**
 * Props
 */
interface Props {
  authStep: AuthStep;
  onLoginClick: (username: string, password: string) => void;
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
}

/**
 * Handles Authentication Views
 */
const AuthenticationScreen = (props: Props) => {
  /**
   * React hooks state
   */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Show the login view
   */
  const showLoginView = () => {
    return (
      <View style={styles.loginView}>
        <View style={styles.loginViewComponents}>
          <TextInput
            label="Username"
            value={username}
            theme={AppDefaultTheme}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.loginViewComponents}>
          <TextInput
            label="password"
            value={password}
            theme={AppDefaultTheme}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.loginViewComponents}>
          <Button
            icon="account"
            mode="contained"
            color={COLORS.secondaryColor}
            onPress={() => props.onLoginClick(username, password)}>
            Login
          </Button>
        </View>
        <View style={styles.loginViewComponents}>
          <Button
            icon="account"
            mode="contained"
            color={COLORS.primaryColor}
            onPress={() => props.onRegisterClick()}>
            Register
          </Button>
        </View>
        <View style={styles.loginViewComponents}>
          <Button
            icon="account-question"
            mode="outlined"
            color={COLORS.secondaryColor}
            onPress={() => props.onForgotPasswordClick()}>
            Forgot Password?
          </Button>
        </View>
      </View>
    );
  };

  /**
   * Show the register view
   */
  const showRegisterView = () => {
    return <RegisterComponent />;
  };

  /**
   * Show the forgot password view
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loginView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginViewComponents: {paddingBottom: 10, paddingHorizontal: 10},
});

export default AuthenticationScreen;
