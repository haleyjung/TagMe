import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

import Home from './src/screens/Home';
import TagGenerator from './src/screens/TagGenerator';
import ImgGallery from './src/screens/ImgGallery';

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
        <View>
          <ImgGallery />
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