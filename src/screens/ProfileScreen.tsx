import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
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
      <Tab.Navigator>
        <Tab.Screen
          name="Following"
          component={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
        <Tab.Screen
          name="Followers"
          component={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
        <Tab.Screen
          name="Favourites"
          component={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
        <Tab.Screen
          name="Wishlist"
          component={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ProfileScreen;
