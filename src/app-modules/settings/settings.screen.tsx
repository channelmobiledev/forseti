import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/COLORS';

interface Props {
  onLogoutClick: () => void;
}

/**
 * Settings Screen
 */
const SettingsScreen = (props: Props) => {
  /**
   * Data models
   */
  interface ListItemSettingsViewType {
    view: () => {};
    onClick: () => void;
  }

  interface ListItemSettings {
    name: string;
    description: string;
    type: ListItemSettingsViewType;
  }

  /**
   * Generic Button Option view
   */
  const optionButtonConfirm = () => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'flex-end',
        }}>
        <Button
          containerStyle={{marginTop: 10}}
          titleStyle={{
            color: COLORS.white,
          }}
          buttonStyle={{borderColor: COLORS.white}}
          type="outline"
          title={'Logout'}
          icon={
            <MaterialCommunityIcons
              name="power"
              size={20}
              color={COLORS.white}
            />
          }
          onPress={() => {
            props.onLogoutClick();
          }}></Button>
      </View>
    );
  };

  const settingsList: ListItemSettings[] = [
    {
      name: 'USERNAME',
      description: 'Current user',
      type: {view: optionButtonConfirm, onClick: () => {}},
    },
  ];

  /**
   * List item view
   */
  const settingListItem = ({item}: {item: ListItemSettings}) => {
    /**
     * Render
     */
    return (
      <ListItem bottomDivider containerStyle={{backgroundColor: '#00000000'}}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>{item.type.view()}</ListItem.Content>
      </ListItem>
    );
  };

  /**
   * Render
   */
  return (
    <>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={settingsList}
        renderItem={settingListItem}
      />
    </>
  );
};

export default SettingsScreen;
