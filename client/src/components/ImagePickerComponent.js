import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
// import styled from 'styled-components';

export default function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText('Loading..');
      const responseData = await onSubmit(result.base64);
      setText(responseData);
    }
  };

  let itemList;
  if (Array.isArray(text) && text.length > 1) {
    itemList = text.map((tag, i) => {
      return <Text key={i}>#{tag}</Text>;
    });
  }

  return (
    <View style={styles.container}>

      <View style={styles.headContainer}>
        <Text style={styles.Heading}>Recommended Hashtags</Text>
      </View>

      <View style={styles.imgContainer}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: '90%', height: '80%', resizeMode: 'contain' }}
          />
        )}
      </View>

      <View style={styles.tagContainer}>
        {itemList}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Upload A Photo" onPress={pickImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    backgroundColor: 'gold',
    justifyContent: 'center'
  },
  headContainer: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  tagContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: '#49beb7',
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  Heading: {
    fontSize: 20,
  },
});
