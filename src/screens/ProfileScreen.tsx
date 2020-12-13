import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../constants/COLORS';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{flexDirection: 'column', backgroundColor: '#ff0000'}}>
      <View style={{flex: 0}}>
        <ProfileView />
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#ff073a',
            indicatorStyle: {
              backgroundColor: '#ff073a',
            },
          }}>
          <Tab.Screen name="Following" component={DummyView} />
          <Tab.Screen name="Followers" component={DummyView} />
          <Tab.Screen name="Favourites" component={DummyView} />
          <Tab.Screen name="Wishlist" component={DummyView} />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

const ProfileView = () => {
  return (
    <ListItem containerStyle={{backgroundColor: COLORS.background}}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: 'https://source.unsplash.com/random/800x600',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{color: COLORS.text}}>
          Example name
        </ListItem.Title>
        <ListItem.Subtitle style={{color: COLORS.text}}>
          20k subs
        </ListItem.Subtitle>
        <Button
          containerStyle={{marginTop: 10}}
          titleStyle={{
            color: '#ff073a',
          }}
          buttonStyle={{borderColor: '#ff073a'}}
          icon={
            <MaterialCommunityIcons
              name="crown-outline"
              size={26}
              color="#ff073a"
            />
          }
          title="Follow"
          type="outline"
        />
      </ListItem.Content>
    </ListItem>
  );
};

const DummyView = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
    </View>
  );
};
export default ProfileScreen;
