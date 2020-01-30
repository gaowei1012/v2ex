/*
 * @Author: your name
 * @Date: 2019-12-24 14:40:36
 * @LastEditTime : 2019-12-26 09:53:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/component/FlatList/index.js
 */
'use strict';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {screentW} from '../../utils/screenUtil';
import {px2dp} from '../../utils/px2dp';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

export default class FlatListItem extends Component {
  static propTypes = {
    flat_item: PropTypes.array,
    onSelect: PropTypes.func,
  };

  _renderItem({item}) {
    // console.log('item', item);
    const {onSelect} = this.props;
    let last_time = new Date(item.last_modified).getMinutes();
    return (
      <TouchableOpacity
        onPress={() =>
          onSelect(
            item.url,
            item.content,
            item.node,
            item.member,
            item.last_modified,
          )
        }
        activeOpacity={1}>
        <View style={styles.flatBox}>
          <View style={styles.topContainer}>
            <Image
              style={styles.image}
              source={{uri: `https:${item.member.avatar_normal}`}}
            />
            <View style={styles.userInfoBox}>
              <View style={styles.userNameBox}>
                <Text style={styles.userName}>{item.member.username}</Text>
                <View style={styles.infoBox}>
                  <Text style={styles.modified}>{last_time} 分钟前</Text>
                  <Text style={styles.last}>最后回复 {item.last_reply_by}</Text>
                </View>
              </View>
              <View style={styles.replyBox}>
                <Text style={styles.replyText}>{item.node.title}</Text>
                <Image
                  style={styles.replyImage}
                  resizeMode="contain"
                  source={require('../../images/common/message.png')}
                />
                <Text>{item.replies}</Text>
              </View>
            </View>
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {flat_item} = this.props;
    if (!flat_item) return null;
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={true}
          horizontal={false}
          data={flat_item}
          renderItem={item => this._renderItem(item)}
          onRefresh={null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  flatBox: {
    width: screentW,
    padding: px2dp(20),
    backgroundColor: '#fff',
    marginBottom: px2dp(10),
  },
  topContainer: {
    flexDirection: 'row',
  },
  image: {
    width: px2dp(80),
    height: px2dp(80),
    marginRight: px2dp(10),
  },
  userName: {
    fontSize: px2dp(26),
    color: '#333',
  },
  userInfoBox: {
    width: px2dp(600),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameBox: {
    flexDirection: 'column',
  },
  infoBox: {
    flexDirection: 'row',
    marginTop: px2dp(6),
  },
  modified: {
    color: '#ccc',
    fontSize: px2dp(24),
  },
  last: {
    marginLeft: px2dp(10),
    color: '#ccc',
    fontSize: px2dp(24),
  },
  replyBox: {
    flexDirection: 'row',
  },
  replyText: {
    padding: px2dp(6),
    height: px2dp(40),
    backgroundColor: '#eee',
  },
  replyImage: {
    width: px2dp(40),
    height: px2dp(40),
    marginRight: px2dp(6),
    marginLeft: px2dp(6),
  },
  titleBox: {
    marginTop: px2dp(20),
    width: screentW - px2dp(20),
  },
  title: {
    fontSize: px2dp(30),
    color: '#333',
  },
});
