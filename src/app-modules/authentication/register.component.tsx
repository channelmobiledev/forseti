import React from 'react';
import {UserRegisterFormModel} from '../../models/UserRegisterForm';
import RegisterScreen from './register.screen';

/**
 * Props
 */
interface Props {
  onRegisterSubmit: (userRegisterForm: UserRegisterFormModel) => void;
  onGoBack: () => void;
}

/**
 * Register Component
 */
const RegisterComponent = (props: Props) => {
  /**
   * Render
   */
  return (
    <RegisterScreen
      onRegisterSubmit={(userRegisterForm: UserRegisterFormModel) =>
        props.onRegisterSubmit(userRegisterForm)
      }
      onBackButtonClick={() => props.onGoBack()}
    />
  );
};

export default RegisterComponent;
