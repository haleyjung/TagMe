import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import TypingText from 'react-native-typing-text';
export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: 400, height: '100%'}}
        source={require('../../assets/giphy.gif')}>

        <View style={styles.container}>

          <View>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/home.png')}></Image>

            <TypingText text = "#TagMe"/>

            <Text style={styles.description}>
              Extract Hashtags From Your Photos
            </Text>
          </View>

          {/* <View>
            <Text>Get Started</Text>
          </View> */}

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    color: 'rgba(0,0,0,0.5)'
  }
});
