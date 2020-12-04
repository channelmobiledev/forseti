import React from 'react';
import {Text, View} from 'react-native';

export interface Props {
  textToShop: number;
}

const DeskDetailsScreen = (props: Props) => {
  return (
    <View>
      <Text>Hello: {props.textToShop}</Text>
    </View>
  );
};

export default DeskDetailsScreen;
