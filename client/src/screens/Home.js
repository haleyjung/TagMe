import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import TypingText from 'react-native-typing-text';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 100 }}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../../assets/home.png')}></Image>

          <TypingText text = "#TagMe"/>

          <Text style={styles.description}>
            Extract Hashtags From Your Photos
          </Text>
        </View>

        <View>
          <Text>Get Started</Text>
        </View>
        {/* <Text>Swipe ➡️</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 10
  }
});
