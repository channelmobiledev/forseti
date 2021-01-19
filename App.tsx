import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/constants/COLORS';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedComponent from './src/components/FeedComponent';
import DeskDetailsComponent from './src/components/DeskDetailsComponent';
import ProfileComponent from './src/app-modules/profile/profile.component';
import AddDeskComponent from './src/components/AddDeskComponent';
import SettingsComponent from './src/app-modules/settings/settings.component';

const Tab = createMaterialBottomTabNavigator();
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
    backgroundColor: '#ff0000',
    placeholder: '#ff0000',
    underlineColor: '#ff0000',
  },
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={AppDefaultTheme}>
          <MainNavigationTabViews />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const MainNavigationTabViews = () => {
  return (
    <Tab.Navigator labeled={true} activeColor={COLORS.secondaryColor}>
      <Tab.Screen
        name="Feed"
        component={TabFeedComponent}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="billboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Desk"
        component={TabAddDeskComponent}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="image-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabProfileComponent}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TabSettingsComponent}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabFeedComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Desk Detail" component={DeskDetailsComponent} />
    </Stack.Navigator>
  );
};

const TabAddDeskComponent = () => {
  return <AddDeskComponent />;
};

const TabProfileComponent = () => {
  return <ProfileComponent />;
};

const TabSettingsComponent = () => {
  return <SettingsComponent />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
