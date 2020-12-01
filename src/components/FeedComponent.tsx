import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FeedComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello :D</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedComponent;
