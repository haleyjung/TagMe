import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          {/* <Text>First page</Text> */}
          <Home />
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          {/* <Text>Second page</Text> */}
          <AddItem />
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="3">
          {/* <Text>Third page</Text> */}
          <ListItem />
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