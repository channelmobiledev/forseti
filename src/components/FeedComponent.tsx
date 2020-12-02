import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedListItem from '../screens/FeedListItem';

const FeedComponent = () => {
  const [dataProvider, setDataProvider] = useState(getDummyData());
  const [isFetching, setIsFetching] = useState(false);

  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}) => {
    return <FeedListItem />;
  };

  const getData = () => {
    setIsFetching(true);

    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setIsFetching(false);
        //console.log('DEBUG data: ' + JSON.stringify(json));

        console.log('DEBUG data: ' + JSON.stringify(dataProvider));
        console.log(json);

        setDataProvider(json.movies);

        console.log('DEBUG data: ' + JSON.stringify(dataProvider));
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
