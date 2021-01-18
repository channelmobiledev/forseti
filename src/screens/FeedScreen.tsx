import React from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import GradientView from '../app-modules/utilityViews/gradient.screen';
import COLORS from '../constants/COLORS';
import FeedItemModel from '../models/FeedItemModel';
import FeedListItem from './FeedListItem';

export interface Props {
  onRefresh: () => void;
  refreshing: boolean;
  data: FeedItemModel[];
  onPhotoClick: (id: number) => void;
}

const FeedScreen = (props: Props) => {
  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}: {item: FeedItemModel}) => {
    return (
      <FeedListItem
        data={item}
        onPhotoClick={(id: number) => props.onPhotoClick(id)}
      />
    );
  };

  const renderHasData = () => {
    return (
      <View style={styles.containerData}>
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

  const renderEmptyData = () => {
    return (
      <ScrollView
        contentContainerStyle={styles.containerScrollView}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={() => props.onRefresh()}
          />
        }>
        <View style={styles.containerNoData}>
          <Text h3 style={styles.textError}>
            No data from the server 🥺
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <GradientView>
      {props.data.length > 0 ? renderHasData() : renderEmptyData()}
    </GradientView>
  );
};

const styles = StyleSheet.create({
  containerData: {
    flex: 1,
  },
  containerNoData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScrollView: {
    flexGrow: 1,
  },
  gradient: {
    flex: 1,
  },
  textError: {
    color: COLORS.text,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
});

export default FeedScreen;
