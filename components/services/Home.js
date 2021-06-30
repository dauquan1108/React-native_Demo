import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../group/Header';
import BanDangNghiGi from '../group/BanDangNghiGi';
import TabNavigation from '../group/TabNavigation';

class Home extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Header />
          <View style={styles.BorderButton} />
          <BanDangNghiGi />
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
