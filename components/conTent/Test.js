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
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView,
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFontis from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IonEntypo from 'react-native-vector-icons/Entypo';
import IonFontAwesome from 'react-native-vector-icons/FontAwesome';

import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';

class BlogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.BlogApp}>
          <View style={styles.Header}>
            <View style={styles.HeaderInput}>
              <TouchableOpacity style={styles.HeaderInputIcon}>
                <IonFontAwesome
                  name="chevron-left"
                  size={15}
                  color="#ccc"
                  onPress={this.goBack}
                />
              </TouchableOpacity>
              <View style={styles.HeaderInputTextInput}>
                <TextInput
                  style={styles.HeaderInputTextInputText}
                  placeholder="Tìm kiếm"
                />
              </View>
            </View>
          </View>

          <View style={styles.personal}>
            <View style={styles.personalImage}>
              <View style={styles.personalCoverImage}>
                <Image
                  source={a1}
                  style={{
                    width: 380,
                    height: 250,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <TouchableOpacity style={styles.backgroundCamera}>
                  <View style={styles.IconCamera}>
                    <IonFontAwesome name="camera" size={20} color="#000" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.personalAvatar}>
                <View style={styles.ImageAvatar}>
                  <Image
                    source={a2}
                    style={{
                      flex: 1,
                      width: 180,
                    }}
                  />
                </View>
                <TouchableOpacity style={styles.AvatarCamera}>
                  <View style={styles.IconCameraAvatar}>
                    <IonFontAwesome name="camera" size={20} color="#000" />
                  </View>
                </TouchableOpacity>
                <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                  Đậu Xuân Quân
                </Text>
              </View>
            </View>

            <View style={styles.personalSettings}>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="user-edit"
                    size={25}
                    color="#000"
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>
                  Chỉnh sửa trang cá nhân
                </Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="clipboard-list"
                    size={25}
                    color="#000"
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>Xét duyệt</Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="user-friends"
                    size={25}
                    color="#000"
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>Bạn bè</Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="rss"
                    size={25}
                    color="#000"
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>
                  Người theo dõi
                </Text>
              </View>
            </View>

            <View style={styles.personalInformation}>
              <View style={styles.personalInformationPhone}>
                <View style={styles.personalInformationPhoneIcon}>
                  <Icons name={'phone-volume'} color={'#000'} size={20} />
                </View>

                <View style={styles.personalInformationPhoneTitle}>
                  <Text>Số điện thoại: </Text>
                </View>

                <View style={styles.personalInformationPhoneTitle}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    0387091106
                  </Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.personalInformationPhoneIcon}>
                    <IconFontis name={'share-a'} color={'#000'} size={15} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.personalInformationWork}>
                <View style={styles.personalInformationWorkIcon}>
                  <Icons name={'briefcase'} color={'#000'} size={20} />
                </View>

                <View style={styles.personalInformationWorkText}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    Viện CNPM/Công nghệ phần mềm, Viện CNPM
                  </Text>
                </View>
              </View>

              <View style={styles.personalInformationPhone}>
                <View style={styles.personalInformationPhoneIcon}>
                  <Icons name={'user-circle'} color={'#000'} size={20} />
                </View>

                <View style={styles.personalInformationPhoneTitle}>
                  <Text>Chức vụ: </Text>
                </View>

                <View style={styles.personalInformationPhoneTitle}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    Sinh Viên Thực Tập
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.Believe}>
            <View style={styles.BelieveHeader}>
              <View style={styles.BelieveHeaderIcon}>
                <View style={styles.BelieveHeaderIconTitle}>
                  <Text
                    style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                    Bài Viết
                  </Text>
                </View>

                <View style={styles.BelieveHeaderIconIcon}>
                  <View style={styles.IconCamera}>
                    <IconIonicons
                      name="md-options-outline"
                      size={20}
                      color="#000"
                    />
                  </View>
                  <View style={styles.IconCamera}>
                    <IconFeather name="settings" size={20} color="#000" />
                  </View>
                </View>
              </View>
              <View style={styles.BelieveHeaderWhatYouThinking}>
                <View style={styles.BelieveHeaderWhatYouThinkingImage}>
                  <Image
                    source={a2}
                    style={{
                      flex: 1,
                      width: 40,
                    }}
                  />
                </View>
                <Text> Bạn đang nghĩ gì?</Text>
              </View>
            </View>

            <View style={styles.BelieveNavigation}>
              <TouchableOpacity>
                <View style={styles.BelieveNavigationText}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#479bcd',
                      backgroundColor: '#ccc',
                      padding: 7,
                      borderRadius: 18,
                    }}>
                    Tất cả
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.BelievePackage}>
              <View style={styles.BelievePackageItem}>
                <View style={styles.BelievePackageItemHeader}>
                  <View style={styles.BelievePackageItemHeaderAvatar}>
                    <Image
                      source={a2}
                      style={{
                        flex: 1,
                        width: 40,
                      }}
                    />
                  </View>

                  <View style={styles.BelievePackageItemHeaderTitle}>
                    <View style={styles.BelievePackageItemHeaderTitleName}>
                      <Text>Đậu Xuân Quân</Text>
                    </View>
                    <View style={styles.BelievePackageItemHeaderTitleTime}>
                      <Text>Hôm qua</Text>
                    </View>
                    <View style={styles.BelievePackageItemHeaderTitleIcon}>
                      <IconIonicons
                        name="md-lock-closed-outline"
                        size={15}
                        color="#000"
                      />
                    </View>
                  </View>

                  <View style={styles.BelievePackageItemHeaderIcon}>
                    <TouchableOpacity>
                      <IonEntypo
                        name="dots-three-horizontal"
                        size={15}
                        color="#000"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default BlogApp;

const styles = StyleSheet.create({
  BlogApp: {},
  // Header
  Header: {
    flex: 1,
    height: 80,
    borderBottomWidth: 0.5,
    borderBottomColor: '#72707475',
  },

  HeaderInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginTop: 25,
  },
  HeaderInputIcon: {
    flex: 2,
    alignItems: 'center',
  },
  HeaderInputTextInput: {
    flex: 11,
  },
  HeaderInputTextInputText: {
    backgroundColor: '#ccc',
    height: 40,
    width: 300,
    fontSize: 15,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 15,
  },
  // end Header

  // personal
  personal: {
    margin: 15,
  },

  personalImage: {
    alignItems: 'center',
    overflow: 'hidden',
    height: 400,
  },
  personalCoverImage: {
    position: 'relative',
  },
  backgroundCamera: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  IconCamera: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: 35,
    width: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
  personalAvatar: {
    alignItems: 'center',
    position: 'absolute',
    top: 150,
  },
  ImageAvatar: {
    overflow: 'hidden',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
    height: 185,
    borderRadius: 185 / 2,
    borderWidth: 3,
  },
  IconCameraAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  AvatarCamera: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    bottom: 50,
    right: -8,
    borderRadius: 43 / 2,
    borderWidth: 2,
  },

  personalSettings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  personalSettingsItem: {
    alignItems: 'center',
    width: 90,
  },
  personalSettingsItemIcon: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  personalSettingsItemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 13,
  },

  personalInformation: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  personalInformationPhone: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  personalInformationPhoneIcon: {
    paddingRight: 10,
  },
  personalInformationPhoneTitle: {
    paddingRight: 10,
  },

  personalInformationWork: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginBottom: 15,
  },
  personalInformationWorkIcon: {
    flex: 1,
  },
  personalInformationWorkText: {
    flex: 10,
  },
  // end personal

  // Believe
  Believe: {
    flexDirection: 'column',
  },

  BelieveHeader: {
    borderColor: '#ccc',
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  BelieveHeaderIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#72707475',
  },
  BelieveHeaderIconTitle: {
    flex: 5,
  },
  BelieveHeaderIconIcon: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  BelieveHeaderWhatYouThinking: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  BelieveHeaderWhatYouThinkingImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },

  BelieveNavigation: {
    flexDirection: 'row',
  },
  BelieveNavigationText: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  BelievePackage: {
    flexDirection: 'column',
    borderColor: '#ccc',
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  BelievePackageItem: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
  BelievePackageItemHeader: {
    flexDirection: 'row',
    flex: 1,
  },
  BelievePackageItemHeaderAvatar: {
    flex: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },

  BelievePackageItemHeaderTitle: {
    flex: 8,
  },
  BelievePackageItemHeaderTitleTime: {},
  BelievePackageItemHeaderTitleIcon: {},
  BelievePackageItemHeaderTitleName: {},
  BelievePackageItemHeaderTime: {},

  BelievePackageItemHeaderIcon: {
    flex: 2,
  },

  // end Believe
});
