import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AnimatedText from '../components/AnimatedText';
export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/giphy.gif')}
      >
        <View style={styles.container}>
          <View>
            <Image
              style={{ width: 230, height: 230,  }}
              source={require('../../assets/home.png')}
            />

            <AnimatedText text="#TagMe" />

            <Text style={styles.description}>
              Extract Hashtags From Your Photos
            </Text>
          </View>

          <View style={{ marginTop: '25%'}}>
            <TouchableOpacity
              style={[styles.startButton, styles.buttonShadowProp]}
              onPress={() => this.props.navigation.navigate('TagGenerator')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
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
  startButton: {
    height: 50,
    width: 150,
    backgroundColor: '#F2F2F2',
    borderColor: '#F2B705',
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonShadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#F29F05'
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    color: 'rgba(0,0,0,0.5)',
  },
});
