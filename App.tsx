import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/constants/COLORS';
import FeedComponent from './src/components/FeedComponent';
import DeskDetailsComponent from './src/components/DeskDetailsComponent';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, Button, Card, ListItem} from 'react-native-elements';

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
  },
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={AppDefaultTheme}>
          <DashboardView />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const DashboardView = () => {
  return (
    <Tab.Navigator labeled={true} activeColor="#f14c48">
      <Tab.Screen
        name="Feed"
        component={TabFeedView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="billboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Desk"
        component={TabAddDeskView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="image-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabProfileView}
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

const TabFeedView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed ✨" component={FeedComponent} />
      <Stack.Screen name="Desk Detail" component={DeskDetailsComponent} />
    </Stack.Navigator>
  );
};

const TabAddDeskView = () => {
  return (
    <View>
      <Text>Hello :D</Text>
    </View>
  );
};

const TabProfileView = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ListItem>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: 'https://source.unsplash.com/random/800x600',
          }}
        />
        <ListItem.Content>
          <ListItem.Title>Example name</ListItem.Title>
          <ListItem.Subtitle>20k subs</ListItem.Subtitle>
          <Button
            titleStyle={{
              color: '#f14c48',
            }}
            buttonStyle={{borderColor: '#f14c48'}}
            icon={
              <MaterialCommunityIcons
                name="crown-outline"
                size={26}
                color="#f14c48"
              />
            }
            title="Follow"
            type="outline"
          />
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
