import React from 'react';
import RegisterScreen from './register.screen';

/**
 * Props
 */
interface Props {
  onGoingBack: () => void;
}

/**
 * Register Component
 */
const RegisterComponent = (props: Props) => {
  /**
   * Render
   */
  return <RegisterScreen onBackButtonClick={() => props.onGoingBack()} />;
};

export default RegisterComponent;
