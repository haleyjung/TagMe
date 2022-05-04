import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.logo}>Image Gallery</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'flex-end',
  // },
  // logo: {
  //   fontSize: 45,
  //   fontWeight: 'bold',
  // },
});
