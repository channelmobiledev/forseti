import React from 'react';
import DeskDetailsScreen from '../screens/DeskDetailsScreen';

const DeskDetailsComponent = ({route}) => {
  const {data} = route.params;

  return (
    <>
      <DeskDetailsScreen data={data} />
    </>
  );
};

export default DeskDetailsComponent;
