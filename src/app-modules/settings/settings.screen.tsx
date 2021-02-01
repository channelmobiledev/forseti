import React from 'react';
import {View} from 'react-native';
import {Button, List} from 'react-native-paper';
import COLORS from '../../constants/COLORS';

interface Props {
  onLogoutClick: () => void;
}

/**
 * Settings Screen
 */
const SettingsScreen = (props: Props) => {
  /**
   * Logout button view
   */
  const UserLogoutButtonArea = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}>
        <Button
          mode="contained"
          icon="power"
          dark={false}
          onPress={() => props.onLogoutClick()}
          contentStyle={{
            backgroundColor: COLORS.secondaryColor,
          }}>
          Logout
        </Button>
      </View>
    );
  };

  /**
   * Render
   */
  return (
    <>
      <List.Section>
        <List.Subheader style={{color: COLORS.white}}>
          User settings
        </List.Subheader>
        <List.Item
          title="USERNAME"
          description="Current user"
          right={() => <UserLogoutButtonArea />}
        />
      </List.Section>
    </>
  );
};

export default SettingsScreen;
