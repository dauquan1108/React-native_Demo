/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author anhnhf@bkav.com on 30/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Text,
} from 'react-native';

import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';

class BlogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.BlogApp}>
        <View style={styles.HeaderBlog}>
          <View style={styles.HeaderBlogOne}>
            <TouchableOpacity>
              <Ionicons
                name="chevron-left"
                size={15}
                color="#ccc"
                onPress={this.goBack}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.HeaderBlogTow}>
            <TextInput style={styles.TextInput} placeholder="Tìm kiếm" />
          </View>
        </View>

        <View style={styles.ContentBlog}>
          <View style={styles.ImageBlog}>
            <View style={styles.background}>
              <Image
                source={a1}
                style={{
                  width: 385,
                  height: 250,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <TouchableOpacity style={styles.backgroundCamera}>
                <View style={styles.IconCamera}>
                  <Ionicons name="camera" size={20} color="#000" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.Avatar}>
              <Image
                source={a2}
                style={{width: 180, height: 180, borderRadius: 500}}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.AvatarCamera}>
                <View style={styles.IconCameraAvatar}>
                  <Ionicons name="camera" size={20} color="#000" />
                </View>
              </TouchableOpacity>
              <View style={styles.Name}>
                <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                  Đậu Xuân Quân
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BlogApp;

const styles = StyleSheet.create({
  BlogApp: {
    marginTop: 35,
  },
  // Header
  HeaderBlog: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  HeaderBlogOne: {
    flex: 2,
    alignItems: 'center',
  },
  HeaderBlogTow: {
    flex: 11,
  },
  TextInput: {
    height: 40,
    width: 300,
    fontSize: 15,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 10,
    backgroundColor: '#ccc',
  },
  // End Header

  // Content
  ContentBlog: {},
  ImageBlog: {
    alignItems: 'center',
  },
  background: {
    position: 'relative',
  },
  backgroundCamera: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },

  IconCamera: {
    backgroundColor: '#ccc',
    height: 35,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Avatar: {
    alignItems: 'center',
    position: 'absolute',
    top: 150,
  },
  IconCameraAvatar: {
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AvatarCamera: {
    position: 'absolute',
    bottom: 70,
    right: 0,
  },
  Name: {
    marginTop: 15,
  },
  // End Content
});
