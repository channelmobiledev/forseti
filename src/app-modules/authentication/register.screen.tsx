import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {colors, theme} from '../../constants/constants';
import {UserRegisterFormModel} from '../../models/UserRegisterForm';

/**
 * TODOS
 * -> Check how to select and upload a profile image
 * -> Validate fields. Show error line when data is not valid
 * -> Keyboard type for each filed (email) (needs to be a custom view inside the TextInput https://callstack.github.io/react-native-paper/text-input.html#render)
 */

/**
 * Props
 */
interface Props {
  onBackButtonClick: () => void;
  onRegisterSubmit: (userRegisterForm: UserRegisterFormModel) => void;
}

/**
 * Register Screen
 */
const RegisterScreen = (props: Props) => {
  /**
   * States
   */
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const validateForm = () => {
    // TODO if validated then send data to server
    let userRegisterForm: UserRegisterFormModel = {
      username: username,
      email: email,
      password: password,
      avatar: 'https://source.unsplash.com/random',
    };

    if (true) {
      props.onRegisterSubmit(userRegisterForm);
    }
  };

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <View style={styles.registerComponents}>
        <TextInput
          label="Username"
          value={username}
          theme={theme}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          label="Email"
          value={email}
          theme={theme}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          theme={theme}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          label="Confirm Password"
          value={passwordConfirm}
          theme={theme}
          onChangeText={(text) => setPasswordConfirm(text)}
        />
      </View>
      <View style={styles.registerComponents}>
        <Button
          icon="account"
          mode="contained"
          color={colors.primaryColor}
          onPress={() => validateForm()}>
          Register New User
        </Button>
      </View>
      <View style={styles.registerComponents}>
        <Button
          icon="arrow-left"
          mode="contained"
          color={colors.secondaryColor}
          onPress={() => props.onBackButtonClick()}>
          Back to login
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
  registerComponents: {paddingBottom: 10, paddingHorizontal: 10},
});

export default RegisterScreen;
