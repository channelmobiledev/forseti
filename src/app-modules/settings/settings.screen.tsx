import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, List} from 'react-native-paper';
import COLORS from '../../constants/COLORS';
import UserModel from '../../models/UserModel';

interface Props {
  isUserLoggedIn: boolean;
  userData: UserModel | undefined;
  onLogoutClick: () => void;
  onSignInClick: () => void;
}

/**
 * Settings Screen
 */
const SettingsScreen = (props: Props) => {
  /**
   * Shows the profile settings component
   */
  const UserProfileSettingsView = () => {
    /**
     * Show when user is not logged in
     */
    const ShowLoginView = () => {
      return (
        <List.Item
          title="Sign-in Required"
          description="Register or login in the app"
          right={(_props) => (
            <View style={styles.itemLogout}>
              <Button
                mode="contained"
                icon="power"
                dark={false}
                onPress={() => props.onSignInClick()}
                contentStyle={{
                  backgroundColor: COLORS.secondaryColor,
                }}>
                Sign in
              </Button>
            </View>
          )}
        />
      );
    };

    /**
     * Show view when user is loggged in
     */
    const ShowLogoutView = () => {
      return (
        <List.Item
          title={
            props.userData ? props.userData.username : 'Retrieving username ...'
          }
          description="Current user"
          right={(_props) => (
            <View style={styles.itemLogout}>
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
          )}
        />
      );
    };

    /**
     * Render
     */
    return props.isUserLoggedIn ? <ShowLogoutView /> : <ShowLoginView />;
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
        <UserProfileSettingsView />
      </List.Section>
    </>
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  itemLogout: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});

export default SettingsScreen;
