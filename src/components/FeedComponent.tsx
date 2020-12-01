import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedListItem from '../screens/FeedListItem';

const FeedComponent = () => {
  const [dataProvider, setDataProvider] = useState(getDummyData());

  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}) => {
    return <FeedListItem />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={dataProvider}
        renderItem={renderItem}
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
