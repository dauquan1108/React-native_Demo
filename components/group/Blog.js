import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

import nen from '../../assets/nen.jpg';
import avatar from '../../assets/avatar.jpg';

class Blog extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.BlogApp}>
          <View style={styles.HeaderBlog}>
            <TouchableOpacity style={styles.HeaderBlogIcon}>
              <Ionicons
                name="chevron-left"
                size={15}
                color="#ccc"
                onPress={this.goBack}
              />
            </TouchableOpacity>
            <View style={styles.HeaderBlogTow}>
              <TextInput style={styles.TextInput} placeholder="Tìm kiếm" />
            </View>
          </View>

          <View style={styles.Blog}>
            <View style={styles.CoverImage}>
              <Image
                source={nen}
                style={{
                  width: 380,
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
              <View style={styles.ImageAvatar}>
                <Image
                  source={avatar}
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: 500,
                    overflow: 'hidden',
                  }}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity style={styles.AvatarCamera}>
                <View style={styles.IconCameraAvatar}>
                  <Ionicons name="camera" size={20} color="#000" />
                </View>
              </TouchableOpacity>
              <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                Đậu Xuân Quân
              </Text>
            </View>
          </View>

          <View style={styles.GroupPersonalInformation}>
            <View style={styles.Group}>
              <TouchableOpacity style={styles.GroupIcon}>
                <Icons
                  name="user-edit"
                  size={25}
                  color="#000"
                  onPress={this.goBack}
                />
              </TouchableOpacity>
              <Text style={styles.GroupText}>Chỉnh sửa trang cá nhân</Text>
            </View>
            <View style={styles.Group}>
              <TouchableOpacity style={styles.GroupIcon}>
                <Icons
                  name="clipboard-list"
                  size={25}
                  color="#000"
                  onPress={this.goBack}
                />
              </TouchableOpacity>
              <Text style={styles.GroupText}>Xét duyệt</Text>
            </View>
            <View style={styles.Group}>
              <TouchableOpacity style={styles.GroupIcon}>
                <Icons
                  name="user-friends"
                  size={25}
                  color="#000"
                  onPress={this.goBack}
                />
              </TouchableOpacity>
              <Text style={styles.GroupText}>Bạn bè</Text>
            </View>
            <View style={styles.Group}>
              <TouchableOpacity style={styles.GroupIcon}>
                <Icons
                  name="rss"
                  size={25}
                  color="#000"
                  onPress={this.goBack}
                />
              </TouchableOpacity>
              <Text style={styles.GroupText}>Người theo dõi</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Blog;

const styles = StyleSheet.create({
  BlogApp: {
    marginTop: 25,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  // Header
  HeaderBlog: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  HeaderBlogIcon: {
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
    paddingRight: 15,
    backgroundColor: '#ccc',
  },
  // End Header

  // Blog
  Blog: {
    alignItems: 'center',
    height: 400,
    overflow: 'hidden',
  },
  CoverImage: {
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
  ImageAvatar: {
    width: 185,
    height: 185,
    borderRadius: 500,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconCameraAvatar: {
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  AvatarCamera: {
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: -8,
    height: 43,
    width: 43,
    borderRadius: 20,
  },

  // End Blog
  GroupPersonalInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  Group: {
    width: 90,
    alignItems: 'center',
  },
  GroupIcon: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  GroupText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
