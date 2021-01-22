import React from 'react';
import {AuthService} from '../../services/auth.service';
import GradientView from '../utilityViews/gradient.screen';
import SettingsScreen from './settings.screen';

/**
 * Services
 */
const authService: AuthService = new AuthService();

const SettingsComponent = () => {
  const profileLogout = () => {
    authService.logout();
  };

  /**
   * Render
   */
  return (
    <GradientView>
      <SettingsScreen onLogoutClick={() => profileLogout()} />
    </GradientView>
  );
};

export default SettingsComponent;
