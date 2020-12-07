import React, {useEffect, useState} from 'react';
import FeedDataRespository from './FeedDataRepository';
import FeedScreen from '../screens/FeedScreen';
import FeedItemModel from '../models/FeedItemModel';

const FeedComponent = ({navigation}) => {
  const [dataProvider, setDataProvider] = useState<FeedItemModel[]>([]);
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
      .then((data: FeedItemModel[]) => {
        setIsFetching(false);
        setDataProvider(data);
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
