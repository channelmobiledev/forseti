import React, {useEffect, useState} from 'react';
import FeedDataRespository from '../repositories/FeedDataRepository';
import FeedScreen from '../screens/FeedScreen';
import FeedItemModel from '../models/FeedItemModel';

const FeedComponent = ({navigation}) => {
  const [dataProvider, setDataProvider] = useState<FeedItemModel[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const dataRepo = new FeedDataRespository();

  useEffect(() => {
    getFeedData();
  }, []);

  const getFeedData = () => {
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

  const getDesktopData = (id: number) => {
    setIsFetching(true);

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    fetch('http://192.168.0.13:8000/desktop/', options)
      .then((response) => response.json())
      .then((response: any) => {
        setIsFetching(false);

        if (response.error) {
          console.log('DEBUG Error: ' + response.error);
        } else {
          console.log('DEBUG Data: ' + JSON.stringify(response));
          navigateToDeskDetailScreen(response);
        }
      })
      .catch((error) => {
        setIsFetching(false);
        console.error(error);
      });
  };

  const onRefresh = () => {
    getFeedData();
  };

  const navigateToDeskDetailScreen = (data: any) => {
    navigation.navigate('Desk Detail', {
      data,
    });
  };

  return (
    <>
      <FeedScreen
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        data={dataProvider}
        onPhotoClick={(id: number) => {
          getDesktopData(id);
        }}
      />
    </>
  );
};

export default FeedComponent;
