import React from 'react';
import DeskDetailsScreen from '../screens/DeskDetailsScreen';

const DeskDetailsComponent = ({route}) => {
  const {deskDetailId} = route.params;

  return (
    <>
      <DeskDetailsScreen textToShop={deskDetailId} />
    </>
  );
};

export default DeskDetailsComponent;
