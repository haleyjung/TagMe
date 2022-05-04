import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.logo}>#TagMe</Text>
        <Text>Swipe ➡️</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 45,
  },
});
