import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants/COLORS';

/**
 * Props
 */
interface Props {
  children?: ReactNode;
}

/**
 * Renders a screen with a message
 */
const GradientView = (props: Props) => {
  /**
   * Render
   */
  return (
    <LinearGradient
      colors={[COLORS.grd1, COLORS.grd2]}
      start={{x: 0.2, y: 0.2}}
      end={{x: 0.8, y: 0.8}}
      style={styles.container}>
      <>{props.children}</>
    </LinearGradient>
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientView;
