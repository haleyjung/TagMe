import * as React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ImageUploader from "../components/ImageUploader";
import helpers from "../config/helpers";

export default function TagGenerator() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageUploader onSubmit={helpers.callGoogleVisionAsync} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
    // padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
});
