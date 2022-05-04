// import * as React from "react";
// import { Text, SafeAreaView, StyleSheet } from "react-native";
// import Constants from "expo-constants";

// import ImagePickerComponent from "./src/components/ImagePickerComponent";
// import callGoogleVisionAsync from "./src/config/helperFunction";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text styles={styles.Logo}>#TagMe</Text>
//       <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   Logo: {
//     fontSize: 45,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

import Home from './src/screens/Home';
import TagGenerator from './src/screens/TagGenerator';

const MyPager = () => {

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Home />
        </View>
        <View style={styles.page} key="2">
          <TagGenerator />
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPager;