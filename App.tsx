import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <>
            <Text>Hello :D</Text>
          </>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
