import React from 'react';
import {View} from 'react-native';
import {Avatar, Badge, ListItem, Text} from 'react-native-elements';
import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import COLORS from '../constants/COLORS';
import FeedItemModel from '../models/FeedItemModel';

export interface Props {
  feedData: FeedItemModel;
  onPhotoClick: (id: number) => void;
}

const FeedListItem = (props: Props) => {
  return (
    <>
      <Card
        containerStyle={{
          padding: 0,
          backgroundColor: COLORS.card,
          borderColor: COLORS.card,
        }}>
        <ListItem containerStyle={{backgroundColor: COLORS.card}}>
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
          style={{height: 250}}
          source={{
            uri: props.feedData.post.photo,
          }}
          onPress={() => props.onPhotoClick(props.feedData.post.id)}
        />
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <View style={{padding: 5, margin: 5}}>
              <Icon
                name="heart"
                type="font-awesome"
                color="#a0a0a0"
                size={26}
                onPress={() => console.log('hello')}
              />
            </View>
            <View style={{padding: 5, margin: 5}}>
              <Icon
                name="comment"
                type="font-awesome"
                color="#a0a0a0"
                size={26}
                onPress={() => console.log('hello')}
              />
            </View>
            <View style={{padding: 5, margin: 5}}>
              <Icon
                name="share"
                type="font-awesome"
                color="#a0a0a0"
                size={26}
                onPress={() => console.log('hello')}
              />
            </View>
          </View>
          <View
            style={{flex: 1, padding: 5, margin: 5, alignItems: 'flex-end'}}>
            <Icon
              name="bookmark"
              type="font-awesome"
              color="#a0a0a0"
              size={26}
              onPress={() => {
                console.log('hello');
              }}
            />
          </View>
        </View>
      </Card>
    </>
  );
};

export default FeedListItem;
