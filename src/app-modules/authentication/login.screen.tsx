import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {colors, theme} from '../../constants/constants';

/**
 * TODOS
 * -> BUG: Users can login with success when login fields are empty
 * -> Implement the login field validation (investigate lodash)
 */

/**
 * Props
 */
interface Props {
  onLoginClick: (username: string, password: string) => void;
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
}

/**
 * Login Screen
 */
const LoginScreen = (props: Props) => {
  /**
   * States
   */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <View style={styles.loginComponents}>
        <TextInput
          label="Username"
          value={username}
          theme={theme}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          label="password"
          value={password}
          theme={theme}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.loginComponents}>
        <Button
          icon="account"
          mode="contained"
          color={colors.secondaryColor}
          onPress={() => props.onLoginClick(username, password)}>
          Login
        </Button>
      </View>
      <View style={styles.loginComponents}>
        <Button
          icon="account"
          mode="contained"
          color={colors.primaryColor}
          onPress={() => props.onRegisterClick()}>
          Register
        </Button>
      </View>
      <View style={styles.loginComponents}>
        <Button
          icon="account-question"
          mode="outlined"
          color={colors.secondaryColor}
          onPress={() => props.onForgotPasswordClick()}>
          Forgot Password?
        </Button>
      </View>
    </View>
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginComponents: {paddingBottom: 10, paddingHorizontal: 10},
});

export default LoginScreen;
