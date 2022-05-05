import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

import helpers from '../config/helpers';

export default function Collection() {
  const [savedImg, setSavedImg] = useState([]);
  const [savedTags, setSavedTags] = useState([]);

  useEffect(() => {
    helpers.fetchFromFirebase()
      .then(res => {
        for (let hash in res) {
          setSavedImg(res[hash].image);
          setSavedTags(res[hash].tags);
          console.log(savedTags)
        }
      })
      .catch(err => console.error(err.message));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.logo}>Image Gallery</Text>
      </View>

      {savedTags.map((tag) => (
        <View>
          <Text>{tag}</Text>
        </View>
      ))}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   fontSize: 45,
  //   fontWeight: 'bold',
  // },
});