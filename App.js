import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import TestNative from './components/TestNative';
import GradeLevel from './components/GradeLevel';
import b1 from './assets/b1.jpg';
import b2 from './assets/b2.jpg';
import b3 from './assets/b3.jpg';
import b4 from './assets/b4.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      List: [
        {
          id: 1,
          images: b1,
          text: 'Lenovo IdeaPad Gaming 3 15IMH05 i5 10300H 15IMH05 i5 10300H 15IMH05 i5 10300H (81Y4013VVN)',
        },
        {
          id: 2,
          images: b2,
          text: 'Cấu hình Điện thoại Xiaomi Redmi Note 10 5G 8GB ',
        },
        {
          id: 3,
          images: b3,
          text: 'Điện thoại iPhone 12 64GB ',
        },
        {
          id: 4,
          images: b4,
          text: 'PHỤ KIỆN NỔI BẬT NHẤT',
        },
      ],
    };
  }
  render() {
    const {List} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.App}>
            <View style={styles.TestNative}>
              {List.map((item, index) => {
                return <TestNative item={item} key={index} />;
              })}
            </View>
            <View ttyle={styles.GradeLevel}>
              <GradeLevel />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  App: {
    backgroundColor: '#ececec',
  },
  TestNative: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  GradeLevel: {},
});
export default App;
