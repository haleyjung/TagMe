import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import PagerView from 'react-native-pager-view';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import TagGenerator from './src/screens/TagGenerator';
import ImgGallery from './src/screens/ImgGallery';

const Stack = createNativeStackNavigator();

const MyPager = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="." component={Home} options={{ title: '' }}/>
        <Stack.Screen name="TagGenerator" component={TagGenerator} />
        <Stack.Screen name="ImgGallery" component={ImgGallery} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const MyPager = () => {
//   return (
//     <PagerView style={styles.viewPager} initialPage={0}>
//         <View style={styles.page} key="1">
//           <Home />
//         </View>

//         <View style={styles.page} key="2">
//           <TagGenerator />
//         </View>

//         <View>
//           <ImgGallery />
//         </View>
//     </PagerView>
//   );
// };

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
