import React from 'react';
import {FlatList, Linking, StyleSheet, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/COLORS';

export interface Props {
  data: any;
}

const DeskDetailsScreen = (props: Props) => {
  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}: {item: any}) => {
    return (
      <ListItem
        style={styles.container}
        containerStyle={{backgroundColor: COLORS.card}}>
        <Avatar source={{uri: item.icon}} />
        <ListItem.Content>
          <ListItem.Title style={{color: COLORS.text}}>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: COLORS.text}}>
            {item.type}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => {
            Linking.openURL(item.link);
          }}
        />
      </ListItem>
    );
  };

  return (
    <LinearGradient
      colors={[COLORS.grd1, COLORS.grd2]}
      start={{x: 0.2, y: 0.2}}
      end={{x: 0.8, y: 0.8}}
      style={styles.gradient}>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.data.info}
        renderItem={renderItem}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 15,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  gradient: {
    flex: 1,
  },
});

export default DeskDetailsScreen;
