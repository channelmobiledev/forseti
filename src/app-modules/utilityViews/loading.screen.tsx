import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import COLORS from '../../constants/COLORS';

/**
 * Shows an activity indicator
 */
const Loading = () => {
  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={COLORS.secondaryColor}
      />
    </View>
  );
};

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
