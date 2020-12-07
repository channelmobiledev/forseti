import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedItemModel from '../models/FeedItemModel';
import FeedListItem from './FeedListItem';

export interface Props {
  onRefresh: () => void;
  refreshing: boolean;
  data: FeedItemModel[];
  onPhotoClick: (id: number) => void;
}

const FeedScreen = (props: Props) => {
  // TODO Check if there's data. If not, show no desktops yet

  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}: {item: FeedItemModel}) => {
    return (
      <FeedListItem
        feedData={item}
        onPhotoClick={(id: number) => props.onPhotoClick(id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.data}
        renderItem={renderItem}
        onRefresh={() => props.onRefresh()}
        refreshing={props.refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedScreen;
