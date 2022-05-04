import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../assets/home.png')}></Image>
        <Text style={styles.logo}>#TagMe</Text>
        <Text>Swipe ➡️</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 45,
    fontWeight: 'bold'
  },
});
