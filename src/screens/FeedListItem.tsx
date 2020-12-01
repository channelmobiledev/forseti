import React from 'react';
import {View} from 'react-native';
import {Avatar, Badge, ListItem, Text} from 'react-native-elements';
import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';

const FeedListItem = () => {
  return (
    <>
      <Card containerStyle={{padding: 0}}>
        <ListItem>
          <Avatar
            rounded
            source={{
              uri: 'https://source.unsplash.com/random/800x600 ',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>D3sk_fanatic69</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <Card.Image
          style={{height: 250}}
          source={{
            uri:
              'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg',
          }}
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
