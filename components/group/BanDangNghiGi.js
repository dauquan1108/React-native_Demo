import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import user from '../../assets/user.png';

class BanDangNghiGi extends Component {
  render() {
    return (
      <View style={styles.Header}>
        <View style={styles.HeaderLeft}>
          <Image style={styles.User} source={user} />
        </View>
        <View style={styles.HeaderRight}>
          <TouchableOpacity>
            <Text>Bạn đang nghĩ gì ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BanDangNghiGi;
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    alignItems: 'center',
  },
  HeaderLeft: {
    paddingRight: 10,
  },
  User: {
    width: 30,
    height: 30,
  },
  HeaderRight: {},
});
