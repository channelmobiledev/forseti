import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedListItem from '../screens/FeedListItem';
import FeedDataRespository from './FeedDataRepository';

const FeedComponent = () => {
  const [dataProvider, setDataProvider] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dataRepo = new FeedDataRespository();

  useEffect(() => {
    getData();
  }, []);

  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}) => {
    return <FeedListItem feedData={item} />;
  };

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

  // TODO Check if there's data. If not, show no desktops yet
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedComponent;
