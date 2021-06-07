import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
class TestNative extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.TestNative}>
        <View style={styles.container}>
          <Image style={styles.Img} source={item.images} />
          <View style={styles.Content}>
            <Text numberOfLines={2} style={styles.Text}>
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // khoi
  TestNative: {},
  container: {
    width: 197,
    height: 300,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#f5fffa',
    overflow: 'hidden',
    // shadow trong reactNative
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  Img: {
    width: 197,
    height: 250,
  },
  Content: {
    marginTop: 1,
    width: 197,
    height: 50,
  },
  Text: {
    padding: 5,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  // end khoi
});
export default TestNative;
