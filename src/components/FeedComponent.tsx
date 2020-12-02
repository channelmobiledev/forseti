import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedListItem from '../screens/FeedListItem';
import FeedDataRespository from './FeedDataRepository';

const FeedComponent = () => {
  const [dataProvider, setDataProvider] = useState(getDummyData());
  const [isFetching, setIsFetching] = useState(false);
  const dataRepo = new FeedDataRespository();

  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}) => {
    return <FeedListItem />;
  };

  const getData = () => {
    setIsFetching(true);

    dataRepo
      .fetchData()
      .then((response) => response.json())
      .then((json) => {
        setIsFetching(false);
        // TODO Change for real data
        setDataProvider(json.movies);
      })
      .catch((error) => {
        setIsFetching(false);
        console.error(error);
      });
  };

  const onRefresh = () => {
    getData();
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={dataProvider}
        renderItem={renderItem}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
      />
    </View>
  );
};

const getDummyData = () => {
  return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedComponent;
