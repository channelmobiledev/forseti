import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../../constants/constants';

/**
 * Props
 */
interface Props {
  onBackButtonClick: () => void;
}

/**
 * Register Screen
 */
const RegisterScreen = (props: Props) => {
  /**
   * Render
   */
  return (
    <View style={styles.container}>
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
