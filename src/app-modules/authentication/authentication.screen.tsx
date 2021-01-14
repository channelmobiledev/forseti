import {DefaultTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Button, TextInput} from 'react-native-paper';
import COLORS from '../../constants/COLORS';
import {AuthStep} from '../../models/AuthStepModel';

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

interface Props {
  authStep: AuthStep;
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
}

/**
 * Handles Authentication Views
 */
const AuthenticationScreen = (props: Props) => {
  /**
   * Show the login view
   */
  const showLoginView = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View style={{paddingBottom: 10, paddingHorizontal: 10}}>
          <TextInput
            label="Username"
            value={props.username}
            theme={AppDefaultTheme}
            onChangeText={(text) => props.setUsername(text)}
          />
        </View>
        <View style={{paddingBottom: 10, paddingHorizontal: 10}}>
          <TextInput
            label="password"
            value={props.password}
            theme={AppDefaultTheme}
            onChangeText={(text) => props.setPassword(text)}
          />
        </View>
        <View style={{paddingBottom: 10, paddingHorizontal: 10}}>
          <Button
            icon="account"
            mode="contained"
            color={COLORS.secondaryColor}
            onPress={() => props.onLoginClick()}>
            Login
          </Button>
        </View>
        <View style={{paddingBottom: 10, paddingHorizontal: 10}}>
          <Button
            icon="account"
            mode="contained"
            color={COLORS.primaryColor}
            onPress={() => props.onRegisterClick()}>
            Register
          </Button>
        </View>
        <View style={{paddingHorizontal: 10}}>
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
    return (
      <>
        <Text>Register</Text>
      </>
    );
  };

  /**
   * Show the forgot password view
   */
  const showForgotPasswordView = () => {
    return (
      <>
        <Text>Forgot Password</Text>
      </>
    );
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
});

export default AuthenticationScreen;
