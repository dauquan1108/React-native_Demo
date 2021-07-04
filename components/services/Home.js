import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../group/Header';
import BanDangNghiGi from '../group/BanDangNghiGi';
import TabNavigation from '../group/TabNavigation';

import HeaderGroup from '../group/HeaderGroup';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <ScrollView>
          <HeaderGroup navigation={navigation} title="Thông tin xét duyệt" />
          <Header />
          <View style={styles.BorderButton} />
          <BanDangNghiGi navigation={navigation} />
          <View style={styles.BorderButton} />
          <TabNavigation />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  BorderButton: {
    borderWidth: 0.2,
    borderColor: '#72707475',
  },
});
