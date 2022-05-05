import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import helpers from '../config/helpers';

export default function Collection() {
  // const [savedImg, setSavedImg] = useState([]);
  const [savedTags, setSavedTags] = useState([]);

  useEffect(() => {
    helpers
      .fetchFromFirebase()
      .then((res) => {
        let data = [];
        let uniqueTags = [];
        for (let hash in res) {
          data.push(res[hash].tags);
        }
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j <data[i].length; j++) {
            uniqueTags.push(data[i][j])
          }
        }
        setSavedTags(uniqueTags);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={require('../../assets/giphy0.gif')}
    >
      <ScrollView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.username}>Hi, Haley 🌞 </Text>
          <Text style={styles.greeting}>See your collection at a glance</Text>
          <Image
            source={require('../../assets/giphy1.gif')}
            style={styles.profile}
          />
        </View>
        <View style={styles.tagWrapper}>
          {savedTags.map((tag) => (
            <View style={styles.tagContainer} key={Math.random()}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    borderBottomWidth: 2,
    borderColor: '#F5B873',
    width: '100%',
    height: 120,
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 100,
    color: '#F2167D'
  },
  greeting: {
    position: 'absolute',
    margin: 20,
    paddingTop: 80,
    paddingBottom: 20,
    color: 'rgba(0,0,0, 0.6)'
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'flex-end',
    margin: 30,
    marginBottom: 15,
    marginLeft: -20
  },
  tagWrapper: {
    flex: 6,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'center',
  },
  tagContainer: {
    margin: 20,
    backgroundColor: 'rgba(255,182,193, .4)',
    borderColor: 'rgba(255,182,193, .4)',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    margin: 5,
    width: 160,
  },
  tagText: {
    color: '#000',
  },
});
