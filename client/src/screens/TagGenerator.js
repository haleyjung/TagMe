import * as React from "react";
import { Text, SafeAreaView, StyleSheet, ImageBackground, } from "react-native";
import Constants from "expo-constants";

import ImageUploader from "../components/ImageUploader";
import helpers from "../config/helpers";

export default function TagGenerator({ navigation }) {
  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={require('../../assets/giphy0.gif')}
    >
      <SafeAreaView style={styles.container}>
        <ImageUploader
          onImageUpload={helpers.callGoogleVisionAsync}
          onSave={helpers.addToFirebase}
          navigation={navigation}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
