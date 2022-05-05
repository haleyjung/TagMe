import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import TagGenerator from './src/screens/TagGenerator';
import Collection from './src/screens/Collection';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#F5B873',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
        <Stack.Screen
          name="TagGenerator"
          component={TagGenerator}
          options={{ title: 'Hashtag Extractor' }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={{ title: 'Your Collection' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
