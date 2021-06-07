import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.png';

class GradeLevel extends Component {
  render() {
    return (
      <View style={styles.GradeLevel}>
        <View style={styles.Cha}>
          <View style={styles.Khoi1}>
            <Image style={styles.Anh} source={a3} />
          </View>
          <View style={styles.Khoi2}>
            <Text>Maps</Text>
            <Text>
              multiple columns, infinite scroll loading, or any number of other
              features it supports out of the box.
            </Text>
          </View>
        </View>
        <View style={styles.Cha}>
          <View style={styles.Khoi1}>
            <Image style={styles.Anh} source={a4} />
          </View>
          <View style={styles.Khoi2}>
            <Text> Bảo vệ</Text>
            <Text>
              multiple columns, infinite scroll loading, or any number of other
              features it supports out of the box.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // khoi
  Cha: {
    width: 400,
    height: 100,
    backgroundColor: '#f5fffa',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    marginLeft: 5,
    overflow: 'hidden',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
  },
  Khoi1: {
    height: 35,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  Khoi2: {
    // backgroundColor: 'coral',
    fontSize: 12,
    height: 80,
    width: 355,
    overflow: 'hidden',
  },
  Anh: {
    height: 30,
    width: 30,
  },
});
export default GradeLevel;
