import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../assets/home.png')}></Image>
        <View>
          <Text style={styles.logo}>#TagMe</Text>
        </View>
        <Text>Swipe ➡️</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: 45,
    fontWeight: 'bold',
  },
});
