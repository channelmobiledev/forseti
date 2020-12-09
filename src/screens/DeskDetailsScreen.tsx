import React from 'react';
import {FlatList, Linking, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {StandaloneGallery} from 'react-native-gallery-toolkit/lib/typescript/StandaloneGallery';

export interface Props {
  data: any;
}

const DeskDetailsScreen = (props: Props) => {
  const keyExtractor = (item: {}, index: number) => index.toString();

  const renderItem = ({item}: {item: any}) => {
    return (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.icon}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
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
    <View style={{flex: 1}}>
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={props.data.info}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default DeskDetailsScreen;
