import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedComponent from './src/components/FeedComponent';
import COLORS from './src/constants/COLORS';
import ComponentDeskDetails from './src/components/ComponentDeskDetails';

const Stack = createStackNavigator();

const AppDefaultTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primaryColor,
    background: COLORS.background,
    card: COLORS.card,
    text: COLORS.text,
    notification: COLORS.secondaryColor,
  },
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={AppDefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Feed ✨" component={FeedComponent} />
            <Stack.Screen name="Desk Detail" component={ComponentDeskDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
