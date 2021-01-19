import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Button, ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/COLORS';
import UserModel from '../../models/UserModel';

/**
 * Props
 */
interface Props {
  userData: UserModel;
}

/**
 * Handles the profile screen views
 */
const ProfileScreen = (props: Props) => {
  /**
   * Handles the Material top bar
   */
  const Tab = createMaterialTopTabNavigator();

  /**
   * Render
   */
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{flexDirection: 'column', backgroundColor: '#ff0000'}}>
      <View style={{flex: 0}}>
        <ProfileView userData={props.userData} />
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: COLORS.secondaryColor,
            indicatorStyle: {
              backgroundColor: COLORS.secondaryColor,
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

const ProfileView = (props: Props) => {
  /**
   * Render
   */
  return (
    <ListItem containerStyle={{backgroundColor: COLORS.background}}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: props.userData.avatar,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{color: COLORS.text}}>
          {props.userData.username}
        </ListItem.Title>
        <ListItem.Subtitle style={{color: COLORS.text}}>
          20k subs
        </ListItem.Subtitle>
        <Button
          containerStyle={{marginTop: 10}}
          titleStyle={{
            color: COLORS.secondaryColor,
          }}
          buttonStyle={{borderColor: COLORS.secondaryColor}}
          icon={
            <MaterialCommunityIcons
              name="crown-outline"
              size={26}
              color={COLORS.secondaryColor}
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
