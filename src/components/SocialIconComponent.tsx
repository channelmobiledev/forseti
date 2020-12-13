import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../constants/COLORS';

export interface Props {
  icon: string;
  isActive?: boolean;
  onIconClick: () => void;
}

const SocialIconComponent = (props: Props) => {
  return (
    <View style={styles.socialContainerIcon}>
      <Icon
        name={props.icon}
        type="font-awesome"
        color={props.isActive ? COLORS.secondaryColor : COLORS.inactive}
        size={26}
        onPress={() => props.onIconClick()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainerIcon: {padding: 5, margin: 5},
});

export default SocialIconComponent;
