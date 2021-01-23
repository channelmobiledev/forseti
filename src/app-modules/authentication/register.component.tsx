import React from 'react';
import RegisterScreen from './register.screen';

/**
 * Props
 */
interface Props {
  onGoBack: () => void;
}

/**
 * Register Component
 */
const RegisterComponent = (props: Props) => {
  /**
   * Render
   */
  return <RegisterScreen onBackButtonClick={() => props.onGoBack()} />;
};

export default RegisterComponent;
