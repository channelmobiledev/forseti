import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {Card} from 'react-native-elements';
import SocialIconComponent from '../components/SocialIconComponent';
import COLORS from '../constants/COLORS';
import FeedItemModel from '../models/FeedItemModel';

export interface Props {
  feedData: FeedItemModel;
  onPhotoClick: (id: number) => void;
}

const FeedListItem = (props: Props) => {
  /**
   * TODO
   */
  // - Implement the FAV button feature
  // - Implement the FAV button state change
  // - Change all icons to either Font Awesome or Community SomethingSomething

  const onClickFav = () => {
    console.log('DEBUG To implement 1');
  };

  const onClickComment = () => {
    console.log('DEBUG To implement 2');
  };

  const onClickShare = () => {
    console.log('DEBUG To implement 3');
  };

  return (
    <Card containerStyle={styles.container}>
      <ListItem containerStyle={styles.headerContainer}>
        <Avatar
          rounded
          source={{
            uri: props.feedData.user.avatar,
          }}
        />
        <ListItem.Content>
          <ListItem.Subtitle style={{color: COLORS.text}}>
            {props.feedData.post.title}
          </ListItem.Subtitle>
          <ListItem.Title style={{color: COLORS.text}}>
            {props.feedData.user.name}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <Card.Image
        style={styles.picture}
        source={{
          uri: props.feedData.post.photo,
        }}
        onPress={() => props.onPhotoClick(props.feedData.post.id)}
      />

      <View style={styles.socialContainer}>
        <SocialIconComponent
          icon={'heart'}
          isActive={true}
          onIconClick={() => onClickFav()}
        />

        <SocialIconComponent
          icon={'comment'}
          onIconClick={() => onClickComment()}
        />

        <SocialIconComponent
          icon={'share'}
          onIconClick={() => onClickShare()}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 15,
    marginBottom: 15,
    backgroundColor: COLORS.card,
    borderColor: COLORS.card,
  },
  headerContainer: {backgroundColor: COLORS.card},
  picture: {
    height: 200,
  },
  socialContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default FeedListItem;
