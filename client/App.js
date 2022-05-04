import * as React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ImagePickerComponent from "./src/components/ImagePickerComponent";
import callGoogleVisionAsync from "./src/config/helperFunction";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
