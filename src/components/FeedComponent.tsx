import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedDataRespository from './FeedDataRepository';
import FeedScreen from '../screens/FeedScreen';

const FeedComponent = ({navigation}) => {
  const [dataProvider, setDataProvider] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dataRepo = new FeedDataRespository();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsFetching(true);

    dataRepo
      .fetchData()
      .then((response) => response.json())
      .then((json) => {
        setIsFetching(false);
        setDataProvider(json.data);
      })
      .catch((error) => {
        setIsFetching(false);
        console.error(error);
      });
  };

  const onRefresh = () => {
    getData();
  };

  const navigateToDeskDetailScreen = (id: number) => {
    navigation.navigate('Desk Detail', {
      deskDetailId: id,
    });
  };

  return (
    <>
      <FeedScreen
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        data={dataProvider}
        onPhotoClick={(id: number) => {
          navigateToDeskDetailScreen(id);
        }}
      />
    </>
  );
};

export default FeedComponent;
